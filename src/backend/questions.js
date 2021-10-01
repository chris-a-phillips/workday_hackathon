const list = [
  {
    theme: 'Zombie',
    questions: [
      {
        question: 'You get attacked at night. Afterwards you realize you get bitten. Do you tell your group knowing that there is a 50% chance you will turn in the next 48 hours?',
        options: ['Yes', 'No'],
      },
      {
        question: 'Your best friend has decided that they cannot work with the group anymore and will leave tomorrow. Do you go with your best friend?',
        options: ['Yes', 'No'],
      },
      {
        question: 'You are attacked by zombies and can only save one person. Do you save the leader of the group or the person you are closest to?',
        options: ['Leader', 'Friend'],
      },
      {
        question: "You find a box of supplies that is more than enough for you, but not enough for your entire gorup. Do you keep it all and run the risk of losing others' trust, or do you share it all knowing that not everyone will get an equal share?",
        options: ['Keep', 'Share'],
      },
      {
        question: 'You are the leader of your group and have information about a bigger camp with more supplies. Do you take them to join the bigger camp where you will no longer be the leader, or lead your group in the opposite direction so that you can stay leader?',
        options: ['Join', 'Lead'],
      }
    ]
  },
  {
    theme: 'Space',
    questions: [
      {
        question: 'Your spaceship is orbiting a gas giant too slowly and will fall into it soon. There are only two actions you can take: use up all your fuel and glide for the rest of your journey or shed weight by jettisonning half of your oxygen tanks.',
        options: ['Glide', 'Jettison'],
      },
      {
        question: 'You are in deep space in a badly damaged ship, and your sensors show a disabled ship containing an unidentified life signature ahead of you. Would you extinguish the life signature for safety, or leave it alone?',
        options: ['Kill', 'Leave'],
      },
      {
        question: 'You are trying to save up for a new ship. There is a cargo ship ahead of you containing a lot of valuables. There are only two scouts watching around it; would you attack and plunder the cargo ship and run?',
        options: ['Yes', 'No'],
      },
      {
        question: "An alien empire is willing to pay a hefty price to purchase classified Terran intelligence. You happen to have such intelligence, will you take the deal?",
        options: ['Yes', 'No'],
      },
      {
        question: 'You are tasked to mine minerals from asteroids from one of two places; a populated sector infested with space pirates, or an unexplored domain in deep space. Where would you go?',
        options: ['Populated Sector', 'Unexplored Domain'],
      }
    ]
  },
  {
    theme: 'Tech',
    questions: [
      {
        question: 'Your computer only has enough space to install one of two web browsers; one is known for its speed and accessibility, the other for its privacy protection and tunneling services. Which browser would you choose to use?',
        options: ['Speed', 'Protection'],
      },
      {
        question: 'You computer is hit with a hack that prevents you from accessing the data inside. The perpetrator is demanding a ransom that is roughly the value of the information locked in your computer. Do you pay up?',
        options: ['Yes', 'No'],
      },
      {
        question: 'You are setting up your WFH environment and are shopping for charging cables for your phone. You see only two left in the store: one 2ft long and the other 20ft long. Which one would you buy?',
        options: ['2', '20'],
      },
      {
        question: "You have close friends that are very into investing in volatile commodities such as cryptocurrency, and are encouraging you to do it with them. Would you be convinced? If you were the crypto fanatic, would you invite your friends?",
        options: ['Yes', 'No'],
      },
      {
        question: 'Your friends are planning to launch an ambitious, thought-through tech startup and are inviting you to be a co-founder. However, you have a well paying job and you are very satisfied with it. Would you be convinced?',
        options: ['Yes', 'No'],
      },
    ]
  }
]

module.exports = list;