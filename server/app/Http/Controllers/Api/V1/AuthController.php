<?php

namespace App\Http\Controllers\Api\V1;

use App\User;
use Laravel\Lumen\Routing\Controller;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    public function me(Request $request)
    {
        $user = User::where('id'. $request->user()->id)
                ->with(['restaurant'])
                ->first();
        return response()->json($user);
    }
}