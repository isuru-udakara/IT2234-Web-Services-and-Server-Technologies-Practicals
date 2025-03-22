const greet= (msg, fun) => {
    console.log("Hi..." +msg);
    fun();
}
greet("Good Morning", () => {console.log("Uzar")});
greet("Good Morning", () => {console.log("Jesper")});