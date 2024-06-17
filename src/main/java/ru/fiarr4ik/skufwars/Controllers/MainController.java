package ru.fiarr4ik.skufwars.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

    @Controller
    @RequestMapping("/SkufWars")
    public class MainController {

        @RequestMapping("/")
        public String mainPage() {
            return "main";
        }

        @RequestMapping("/login")
        public String loginPage() {
            return "login";
        }

        @RequestMapping("/register")
        public String registerPage() {
            return "register";
        }

    }
