# NoTrello
Link To App:

    https://notrello.herokuapp.com/


IDEA: TRELLO V2.0
https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-SmellyCat/tree/master/projects/project_4

Models:
-List: (one to many with Card)
    List (Grouped by Id):
        - Title varChar
        - Description text
        - Cards Array
        - Timestamp
-Card: Each item that is added to list is a Card/Post
    Card (Grouped by Id with List):
        - Name
        - Body
        - Labels
        - Image
        - Status (Bool)
-User: Password encrypted using Bcrypt and csrf token attached

"https://notrello-backend.herokuapp.com/" + ⬇️
    (Full CRUD For List, Cards, and Users)
    - get api/list will return all lists
        - post will create new list
        - ... etc
    - get api/card will return all cards
        - post will create new card
        - ... etc
    - get api/useraccount will return all users 
        - post will add new user to the db
            - requires an email an email and password field 
        - email must be unique
        - pw will be hashed using bcrypt prior to being stored in db
        - if username already exist an array is returned 
            error: 
    - get api/useraccount/id will return a single user
        - put will update a single user - password revisions will be hashed prior to being put in the db
        both email and pw must be sent in request
        delete will delete one user
    - get api/useraccount/login that will return an empty object
        - put will find a user in the db by their email and compare their hashed pw to pw in the request
        - if match a user obj will be returned that contains the user email and id but not the pw
        - if they do not match an empty obj will be returned 
        - if user email does not exist in the db and empty obj will be returned

STRETCH GOALS:
- Users(Stretch) ✅
- Auth ✅
- useContext ✅
- React Router ✅
- SASS ❌
- User should be able to have multiple boards ❌
- Boards should be unique to each user ❌





