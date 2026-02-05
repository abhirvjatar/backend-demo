# backend demo - abhirv jatar

for at comp sci presentation on backend

## SCHEMAS

_Schemas are basically the structs, or arrangements of data. Like a message will always have a poster and content, or a user always a username and password. Essentially you can think of it like a Java object, just with only data (variables) and no methods._

Message

```lua
{
    messageId: <string>, (ex: "389E-D381-CKS8")
    posterName: <string>, (ex: "John Doe")
    content: <string>, (ex: "Hello guys!")
    likes: <number>, (ex: 39),
    timePosted: <number>, (ex: 1770303099) [this is a unix timestamp]
    comments: <string>[] (ex: ["KFJ8-28JC-JD9M", "FJ39-ZMS2-DJ18", ...]) [strings of the commentIds]
}
```

Comment

```lua
{
    commentId: <string>, (ex: "KFJ8-28JC-JD9M")
    posterName: <string>, (ex: "John Doe")
    content: <string>, (ex: "Hello guys!")
    likes: <number>, (ex: 39),
    timePosted: <number>, (ex: 1770302051) [this is a unix timestamp]
}
```

## ROUTES

_Routes are like the things the backend will "expose" for the client to interact with. Like a getter and setter that keeps the variable blocked, or a port on a computer only letting some information through. You want to group routes around the things they're handling._

### /message

**GET | (get a list of all messages on the board)**
_The frontend sends nothing, the backend responds with an array of all the messages (sorted by time)._

```lua
request: {}
response: { messages: [Message, Message ...] }
```

**POST | (create a message)**
_The frontend sends the name and content, the server creates the message with all other fields and only responds with a status code (201 Created, 400 Bad Request, 500 Internal Server Error)_

```lua
request: { posterName: <string>, content: <string> }
response: {}
```

### /comments/:messageId

_This :messageId is new! This effectively means that instead of just doing `backendurl.com/message`, instead the url will hold some data. In this case, its `backendurl.com/comments/:messageId`, which would look something like `backendurl.com/comments/?389E-D381-CKS8`_

**GET | (get a list of all comments under this message ID)**

```lua
request: {}
response: { comments: [Comment, Comment ...] }
```

**POST | (create comment under this message id)**

```lua
request: { posterName: <string>, content: <string> }
response: { success: true/false }
```
