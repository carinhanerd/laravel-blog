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
            'title' => ['required', 'string', 'unique:categories'],
            'body' => ['required', 'string'],
            'category_id' => ['nullable']
        ];
    }
}
