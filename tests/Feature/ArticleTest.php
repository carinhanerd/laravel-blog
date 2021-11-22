<?php

namespace Tests\Feature;

use App\Models\Article;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ArticleTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /** @test */
    public function right_user_can_update_article()
    {
        /** @var Article $article */
        $article = Article::factory()->create();

        /** @var User $user */
        $user = $article->user;

        $this->actingAs($user);

        $response = $this->put(route('articles.update', $article), [
            'title' => $title = $this->faker()->unique()->sentence(),
            'body' => $article->body,
            'user_id' => $user->id,
        ]);

        $response->assertRedirect(route('articles.index'));

        $this->assertDatabaseHas(Article::class, ['title' => $title]);
    }

    /** @test */
    public function another_user_cannot_update_article()
    {
        /** @var Article $article */
        $article = Article::factory()->create();

        /** @var User $user */
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->put(route('articles.update', $article), [
            'title' => $this->faker()->sentence()
        ]);

        $response->assertStatus(403);
    }
}
