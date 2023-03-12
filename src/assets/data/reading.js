export const reading = [
  {
    id: 1,
    title:
      'Sequence 01: Itineraries: My Extraordinary Trip “part 01”',
    cat: 'reading',
    audioUrl: 'audioReading_1',
    videoUrl:
      'https://mega.nz/embed/Ss1CVZRS#vEBxJWv_1PjHbn47h9dejNhnZrx3DBYB_sekCtSuYfA',
    test: 'r-t-1',
    hint: 'Before reading the text, what do you think it is going to be about? ', 'what are the hints you relied on to guess? ', 'Read the text quickly and try to get the general idea of the text.',
    text: [
      'Our school organized a seven-days trip around Algeria for excellent learners. The departure was from our city; we all gathered near the school with our parents waiting for the couch, but before heading there, I made sure that all the necessary items (my mobile phone, money, my food, my clothes …etc) were all well-packed. Our final destination was Tlemcen with a stop-over for 2 nights in the capital city, Algiers. ',
      ' First, we travelled to Algiers. On the first day, we went on a sightseeing tour around the city. We visited Makam Elchahid and the National Museum of Moudjahid. The latter is a masterpiece located directly beneath Makam Chahid; it aims to collect, preserve and display objects and memories of the struggle against the French colonialism. At the entrance, the guards asked us to turn off our mobile-phones; therefore, I couldn’t take any pictures of that wonderful place. On the second day, we headed to another tourist attraction which was Elhamma Garden also known as “The Botanical Garden”. At first sight, I felt like “Alice in Wonderland”; it’s so huge and there are hundreds of different plants and high trees. ',
      
    ],
    exp: 'a coach: is a type of bus for travelling long distances',
    questions: [
      // true false
      {
        type: 'trueFalse',
        list: [
          {
            question:
              '1.	They had a one weak trip. ',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
          {
            question:
              '2.	They didn’t take any luggage with them. ',
            answers: ['True', 'False'],
            correctAnswer: 'False',
          },
          {
            question:
              '3.	They visited Makam Chahid and El Hamma Garden and the National Museum.',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
          {
            question:
              '4.	The pupils were allowed to take pictures in the museum. ',
            answers: ['True', 'False'],
            correctAnswer: 'False',
          },
          {
            question:
              'have copmleat Lorem ipsum dolor sit amet,have copmleat Lorem ipsum dolor sit amet,have copmleat Lorem ipsum dolor sit amet,have copmleat Lorem ipsum dolor sit amet, consectetur?',
            answers: ['True', 'False'],
            correctAnswer: 'False',
          },
        ],
      },

      //multiple choice
      {
        type: 'multipleChoice',
        list: [
          {
            question: '•	This trip was organized by: ',
            answers: [
              '1- The school',
              '2- an organization ',
              '3- The parents ',
              '4- The sports club',
            ],
            correctAnswer: '1- The school',
          },
          {
            question: '•	The learners gathered near the school: ',
            answers: [
              '1- 	on their own',
              '2- 	with their teachers ',
              '3- 	with their parents',
              '4- 	with their neighbours ',
            ],
            correctAnswer: '3- with their parents',
          },
          {
            question: '•	The cities they visited are: ',
            answers: [
              '1- 	Tlemcen then Algiers ',
              '2- 	Tlemcen only  ',
              '3- 	Algiers onlyt',
              '4- 	Algiers then Tlemcen ',
            ],
            correctAnswer: '4- 	Algiers then Tlemcen ',
          },
          {
            question: '•	The National Museum is: ',
            answers: [
              '1- a collection of artistic famous paintings.',
              '2- a collection of rare stones ',
              '3- a collection of objects and memories related to the colonialism ',
            ],
            correctAnswer: '3- a collection of objects and memories related to the colonialism',
          },
          {
            question: 'Choose the right choice ?',
            answers: [
              '1- have copmleat Lorem ipsum dolor sit amet,have copmleat Lorem',
              '2- have copmleat Lorem ipsum dolor sit amet,have ',
              '3- have copmleat Lorem ipsum dolor sit amet,have copmleat Lorem',
              '4- have copmleat Lorem ipsum dolor sit amet,have copmleat Loremhave copmleat Lorem ipsum dolor sit amet,have copmleat Lorem',
              '5- have copmleat Lorem ipsum dolor sit amet,have copmleat Lorem',
              '6- have copmleat Lorem ipsum dolor sit amet',
            ],
            correctAnswer: '6- have copmleat Lorem ipsum dolor sit amet',
          },
        ],
      },

      //matching
      {
        type: 'matching',
        question:
          'read the text again and match each word with its definition ',
        answers: {
          g1: [
            '1-	The departure',
            '2- Final Destination ',
            '3- Garden',
            '4-	tourist attraction',
            '5- have copmleat Lorem ipsum dolor sit amet,have copmleat Lorem',
          ],
          g2: [
            'a- a place full of plants and trees ',
            'b- a place that you start your trip from',
            'c- a place people like to visit during holidays because it is beautiful and famous.',
            'd- a place you visit at the end of the trip ',
            'e- have copmleat Lorem ipsum dolor sit amet',
          ],
        },

        correctAnswer: ['1-b', '2-d', '3-a', '4-c', '5-e'],
      },

      //re-ordering
      {
        type: 'reOrdering',
        question: 'Reorder the forllowing ideas based on the their occurance on the text',
        answers: [
          '1- They visited Alhamma Garden.',
          '2- They Started their trip from their city. ',
          '3- They packed their luggage.',
          '4-They travelled to Algiers.',
        ],
        correctAnswer: ['3', '2', '4', '1',],
      },

      //filling the gaps
      {
        type: 'fillingGaps',
        question: ' Read the text again and fill in the gaps with “a.National Museum/ b.Algiers/ c.Elhamma Garden/ d.the pupils',
        answers: [
          ' .	 “we” refers to ----- ./ .	“The latter” refers to the ------ ./ .	“it” refers to ----- ./.	“the city” refers to    ----- .',
        ],
        correctAnswer: ['d', 'a', 'c', 'b',],
      },
    ],
  },
    ],
  },
];
