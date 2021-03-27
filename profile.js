class Profile{
    constructor(){
        this.clientId = "";//Math.floor(Math.random()*10000);
        this.clientSecret = "";
    }

    async getProfile(username){
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        
        const profile = await profileResponse.json();

        const toDoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);

        const todo = await toDoResponse.json();

        return {
            profile,
            todo
        }
    }


}
