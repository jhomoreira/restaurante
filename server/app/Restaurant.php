<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends model
{
    protected $fillable = ['name', 'description', 'photo', 'user_id'];
    protected $appends = ['photo_full_url'];

    protected function getPhotoFullUrlAttribute()
    {
        if($this->attributes['photo'])
            return '';
        else
            return null;
    }
}