export const getPostData = () => ({
    content: 'This is a simple post.',
    likes: 0,
    understandingCheck: [
      {
        question: 'Why do we use Node.js? What does it do?',
        answer: 'In React project, Node.js serves as the runtime environment for executing JavaScript code outside the browser. It’s crucial for the build process, package management, and even local development. The create-react-app command I used to initialize my React project is actually a Node.js command-line tool. Node.js allows me to use npm (Node Package Manager) to install libraries like React and Styled-Components, which are essential for this project.\n\nIn the Next.js project, Node.js serves as the runtime for the server-side logic. Next.js itself is built on top of Node.js, allowing for server-side rendering and API routes. The npm package manager, also Node-based, manages the project dependencies like Next.js and Tailwind CSS.'
      },
      {
        question: 'Explain the Styled-Component you made. What\'s CSS-in-JS, and how does it help compared to regular CSS?',
        answer: 'I used Styled-Components for styling, which is a form of CSS-in-JS. It allows for dynamic styling (e.g. change the color of a button to red when it is hovered over) and scoped styles (locally scope your CSS styles to specific components. This prevents my CSS from leaking into other parts of your application and causing CSS conflicts.).\n\nIn the Next.js project, I opted for Tailwind CSS instead of Styled-Components. Tailwind is a utility-first CSS framework that enables rapid design iterations. While it\'s not CSS-in-JS, it provides a similar benefit of scoped styles and dynamic classes, making it easier to manage styles.'
      },
      {
        question: 'Discuss useState and useEffect. How did you use them?',
        answer: 'UseState was used in both React and Next.js projects to manage likes and content for the post. It allows us to add stateful logic to functional components.\n\nUseEffect wasn\'t used, but could be added for fetching data or other side-effects.'
      },
      {
        question: 'Describe Client-Side Rendering vs. Server-Side Rendering. How did you achieve Server-Side Rendering in Next.js? Think about getServerSideProps.',
        answer: 'Client-Side Rendering was used in the React project, where the browser renders the UI. In Next.js, Server-Side Rendering is a built-in feature. Though we didn\'t explicitly use getServerSideProps in this simple project, it\'s a Next.js function that would allow us to fetch data server-side, improving performance and SEO.'
      },
      {
        question: 'Which coding styles did you follow when coding?',
        answer: 'I followed the Airbnb JavaScript Style Guide to maintain code consistency and readability.'
      }
    ],
  });
  
  
  