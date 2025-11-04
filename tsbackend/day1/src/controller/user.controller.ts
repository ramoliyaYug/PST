import type { Request, Response } from "express";

interface createUserBody{
    name:string;
    dept:string;
}

const allUsers = async