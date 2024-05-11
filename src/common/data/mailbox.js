// Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../assets/images/users/avatar-9.jpg";
import avatar10 from "../../assets/images/users/avatar-10.jpg";
import userDummy from "../../assets/images/users/user-dummy-img.jpg";

const mailbox = [
    {
        id: 1,
        forId: "flexCheck20",
        name: "Peter, me",
        number: "(3)",
        subject: "Hello",
        teaser: "Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)",
        date: "Mar 6",
        type: "primary",
        category: "all",
        label: "theme",
        img: avatar6
    },
    {
        id: 2,
        unread: true,
        forId: "flexCheck17",
        name: "me, Susanna",
        number: "(7)",
        subject: "Since you asked... and i'm inconceivably bored at the train station",
    
        teaser: "Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
        date: "Mar 6",
        type: "primary",
        category: "all",
        label: "friend",
        img: avatar2
    },
    {
        id: 3,
        forId: "flexCheck16",
        name: "Web Support Dennis",
        number: "",
        subject: "Re: New mail settings",
        teaser: "Will you answer him asap?",
        date: "Mar 7",
        type: "primary",
        category: "all",
        label: "theme",
        img: avatar3
    },
    {
        id: 4,
        forId: "flexCheck15",
        name: "me, Peter",
        number: "(2)",
        subject: "Off on Thursday",
    
        teaser: "Eff that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5:55 pm",
        date: "Mar 4",
        type: "primary",
        category: "all",
        label: "theme",
        img: avatar4
    },
    {
        id: 5,
        forId: "flexCheck14",
        name: "Medium",
        number: "",
        subject: "This Week's Top Stories",
    
        teaser: "Our top pick for you on Medium this week The Man Who Destroyed America's Ego",
        date: "Feb 28",
        type: "primary",
        category: "inbox",
        label: "support",
        img: avatar5
    },
    {
        id: 6,
        forId: "flexCheck13",
        name: "Death to Stock",
        number: "",
        subject: "Montly High-Res Photos",
        teaser: "To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.",
        date: "Feb 28",
        type: "primary",
        category: "inbox",
        label: "friend",
        img: userDummy
    },
    {
        id: 7,
        unread: true,
        forId: "flexCheck12",
        name: "Randy, me",
        number: "(5)",
        subject: "Last pic over my village",
    
        teaser: "Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!",
        date: "5:01 am",
        type: "primary",
        category: "all",
        label: "family",
        img: avatar7
    },
    {
        id: 8,
        forId: "flexCheck11",
        name: "Andrew Zimmer",
        number: "",
        subject: "Mochila Beta: Subscription Confirme",
        teaser: "You've been confirmed! Welcome to Project Name the ruling class of the inbox. For your records, here is a copy of the information you submitted to us...",
        date: "Mar 8",
        type: "primary",
        category: "draft",
        label: "social",
        img: avatar8
    },
    {
        id: 9,
        forId: "flexCheck10",
        name: "Infinity HR",
        number: "",
        subject: "Sveriges Hetaste sommarjobb",
        teaser: "Hej Nicklas Sandell! Vi vill bjuda in dig till 'First tour 2014', ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.",
        date: "Mar 8",
        type: "primary",
        category: "starred",
        label: "support",
        img: avatar9
    },
    {
        id: 10,
        forId: "flexCheck09",
        name: "Revibe",
        number: "",
        subject: "Weekend on Revibe",
    
        teaser: "Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!",
        date: "Feb 27",
        type: "primary",
        category: "starred",
        label: "support",
        img: avatar10
    },
    {
        id: 11,
        forId: "flexCheck08",
        name: "Erik, me",
        number: "(5)",
        subject: "Regarding our meeting",
        teaser: "That's great, see you on Thursday!",
        date: "Feb 24",
        type: "primary",
        category: "inbox",
        label: "social",
        img: avatar6
    },
    {
        id: 12,
        forId: "flexCheck07",
        name: "KanbanFlow",
        number: "",
        subject: "Task assigned: Clone ARP's website",
    
        teaser: "You have been assigned a task by Alex@Work on the board Web.",
        date: "Feb 24",
        type: "primary",
        category: "inbox",
        label: "friend",
        img: avatar7
    },
    {
        id: 13,
        forId: "flexCheck06",
        name: "Tobias Berggren",
        number: "",
        subject: "Let's go fishing!",
        teaser:
            "Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
        date: "Feb 23",
        type: "primary",
        category: "inbox",
        label: "family",
        img: avatar8
    },
    {
        id: 14,
        forId: "flexCheck05",
        name: "Charukaw, me",
        number: "(7)",
        subject: "Hey man",
        teaser: "Nah man sorry i don't. Should i get it?",
        date: "Feb 23",
        type: "primary",
        category: "important",
        label: "support",
        img: avatar9
    },
    {
        id: 15,
        unread: true,
        forId: "flexCheck04",
        name: "me, Peter",
        number: "(5)",
        subject: "Home again!",
    
        teaser: "That's just perfect! See you tomorrow.",
        date: "Feb 21",
        type: "primary",
        category: "all",
        label: "theme",
        img: avatar10
    },
    {
        id: 16,
        forId: "flexCheck03",
        name: "Stack Exchange",
        number: "",
        subject: "1 new items in your Stackexchange inbox",
        teaser: "The following items were added to your Stack Exchange global inbox since you last checked it.",
        date: "Feb 21",
        type: "primary",
        category: "starred",
        label: "theme",
        img: userDummy
    },
    {
        id: 17,
        forId: "flexCheck02",
        name: "Google Drive Team",
        number: "",
        subject: "You can now use your storage in GoogleDrive",
        teaser: "Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.",
        date: "Feb 20",
        type: "promotions",
        category: "spam",
        label: "social",
        img: userDummy
    },
    {
        id: 18,
        forId: "flexCheck01",
        name: "me, Susanna",
        number: "(11)",
        subject: "Train/Bus",
        teaser: "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
        date: "Feb 19",
        type: "primary",
        category: "sent",
        label: "theme",
        img: avatar6
    },
    {
        id: 19,
        unread: true,
        forId: "flexCheck21",
        name: "Peter, me",
        number: "",
        subject: "Hello",
        teaser: "Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)",
        date: "Mar 7",
        type: "social",
        category: "inbox",
        label: "support",
        img: avatar2
    },
    {
        id: 20,
        unread: true,
        forId: "flexCheck22",
        name: "me, Susanna",
        number: "(7)",
        subject: "Since you asked... and i'm inconceivably bored at the train station",
    
        teaser: "Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
        date: "Mar 7",
        type: "social",
        category: "all",
        label: "freelance",
        img: avatar4
    },
    {
        id: 21,
        forId: "flexCheck23",
        name: "Web Support Dennis",
        number: "(7)",
        subject: "Re: New mail settings",
        teaser: "Will you answer him asap?",
        date: "Mar 5",
        type: "social",
        category: "trash",
        label: "social",
        img: userDummy
    },
    {
        id: 18,
        forId: "flexCheck24",
        name: "me, Susanna",
        number: "",
        subject: "Train/Bus",
        teaser: "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
        date: "Feb 19",
        type: "promotions",
        category: "draft",
        label: "freelance",
        img: avatar5
    },
    {
        id: 19,
        forId: "flexCheck25",
        name: "Peter",
        number: "",
        subject: "Home again!",
        teaser: "Eff that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5:55 pm",
        date: "Mar 4",
        type: "primary",
        category: "sent",
        label: "support",
        img: avatar2
    },
];

export { mailbox };