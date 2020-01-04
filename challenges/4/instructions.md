### Challenge #4 - This is How You Remind Me (To Register To Vote)
Now that you've squashed all the bugs in the city's new voting software, it's time to jump back on the campaign trail. The election is coming up soon! You need to send out reminders to all Codeville citizens to encourage them to vote, but you don't want to spam people who have already registered. Use JavaScript to remove all registered voters from your contact list.

### Instructions
Complete the function registerToVote(name, unregisteredVoters) that takes in the name of a newly registered voter and an array of names of those who have not yet registered to vote. Your function must return an array, with the newly registered voter's name removed.

Examples
```javascript
// Input:

    const name = 'Bradley';
    const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];
    
// Output:
['Jake', 'Alanna', 'Stephanie']
```

Hint: If we initialize a new empty array within our function, let mailingList = [], we can use a for-loop and an if-statement to push the right names into it.

Or if we're feeling adventurous, let's take a look at JavaScript's filter function. You can see an example of how to remove an item from an array using filter here.