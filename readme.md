steps 
update or insall expo using command 
npm install -g expo-cli
1. npx expo-cli init blog
2. npm install react-navigation 
in case if there is error while installing react-navigation try below command
npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack

for icon goto https://github.com/expo/vector-icons scroll down to get links to icon (https://expo.github.io/vector-icons/)

# begin data base server
-- Adding database server
-- create another directory (jsonserver)
-- in that directory 1. npm init 2. npm install json-server ngrok --save
-- open visual studio code, create db.json 
in package.json add below two script commands 
   "db": "json-server -w db.json",
    "tunnel": "ngrok http 3000"
    in two seperate terminall run these scripts e.g. npm run db  and npm run tunnel
# end of database json server part

# back in blog project 
3. npm install axios
4. create api/jsonserver.js file 
5. 