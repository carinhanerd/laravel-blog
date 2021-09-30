<?php

namespace App\Http\Requests\Article;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticleRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'user_id' => ['required'],
            'title' => ['required', 'string', 'min:3', 'unique:articles'],
            'body' => ['required', 'string', 'min:10'],
            'category_id' => ['nullable']
        ];
    }
}
