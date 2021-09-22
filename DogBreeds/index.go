package main

import "net/http"

func main()  {
	http.HandleFunc("/signup",signupPage)
	http.HandleFunc("/login",signinPage)
	http.HandleFunc("/",content)
	http.ListenAndServe(":8081",nil)
}
func signinPage(res http.ResponseWriter, req *http.Request)  {
	http.ServeFile(res, req, "signin,html")
}
