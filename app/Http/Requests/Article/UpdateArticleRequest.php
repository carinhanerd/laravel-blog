<?php

namespace App\Http\Requests\Article;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateArticleRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->can('update', $this->article);
    }

    public function rules()
    {
        return [
            'user_id' => ['required'],
            'title' => [
                'required', 'string', 'min:3',
                Rule::unique('articles')->ignore($this->article->id)
            ],
            'body' => ['required', 'string', 'min:10'],
            'category_id' => ['nullable']
        ];
    }
}
