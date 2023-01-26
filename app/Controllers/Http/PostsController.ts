// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";
import Post from "App/Models/Post";

export default class PostsController {

    public async index(){
        Post.query().
    }

}
