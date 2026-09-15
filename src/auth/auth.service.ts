import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class AuthService {
      registerUser() {
        return {message: "login successfully!!"};
      }
}
