# Accesa_Gaminfication

#Documentation

I created a website named 'Gamification' using React and Firebase. In the process of making the application to run properly, i created a bunch of JS extension files for a specified work to do. 
Game.js contains the functions to show the principal face of the website from where the player can choose the numbers of questions which he/she wants to receive, they must write their names and can choose the domain from where the questions will be and also their's difficulty. 
In the PlayGame.js we have the connecion with the database,  the functions that calculates the number of wrong answers or right answers, the code that shows the if a answer is right or wrong.Here also shows the questions, the answer options. Next we continue with the common extensions.
In Card.js we have the algorithm to verify if the picked choice is either right or wrong and also contains some functions to show this choices arranged in the page and with some special effects.
In DifficultySelect.js are the functions to handle the changes of difficulty and also to create the visual of option choices in the main menu
The Grid.js contains the main functionalities of wrong and right choices and also to increment or to decrement if a choice is right or wrong, in the final calculating the final score.
The Input.js calculates the number of the questions choice , creates the button for this category in the main menu, with the posibility only to input a number.
The Result.js is for showming the final results of the participants and also to corelate the points which they made and to clasify them into a leaderboard
The Select.js is the extension for choosing the domain from which the question is. The extension creates the button which we see in the main menu with some changes and by the multy chooses of the particpants, it cand handle them like the rest of the other extensions.
Table.js is to create the table of leaderboards in the final of the game.It shows the name of the player, the domain from which he/she choosed, the final points  