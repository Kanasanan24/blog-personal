export interface IFExporeBlog {
    slug: string,
    categories: string[],
    blog_image: string,
    created_at: string,
    title: string,
    description: string,
    author_image: string,
    author_name: string
}

export const explore_blogs:IFExporeBlog[] = [
    {
        slug: "initial-project-typescript",
        categories: ["Web Developer"],
        blog_image: "/assets/images/blog_image/blog-typescript.png",
        created_at: "March 16, 2025",
        title: "การเริ่มต้นโปรเจค Typescript",
        description: "Typescript นับว่าเป็นหนึ่งในภาษาที่มีความนิยมเป็นอย่างมากซึ่งเป็นภาษาที่ทำให้ Javascript มีประสิทธิภาพและความปลอดภัยมากขึ้น",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    },
    {
        slug: "introduction-hci",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/blog-hci.jpg",
        created_at: "March 16, 2025",
        title: "HCI Introduction [Lecture 1]",
        description: "เทคโนโลยีในปัจจุบันมีหลากหลายชนิดการศึกษาเทคโนโลยีและพฤติกรรมของมนุษย์จึงเป็นสิ่งที่จำเป็นในการผลิตหรือพัฒนาเทคโนโลยีขึ้นมาซึ่งสามารถศึกษาได้ใน Human-Computer Interaction",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    },
    {
        slug: "cognitive-foundation",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/brain-unsplash.jpg",
        created_at: "March 19, 2025",
        title: "Cognitive Foundation [Lecture 2]",
        description:
        "ในสัปดาห์นี้นับได้ว่าเป็นเรื่องที่มีความซับซ้อนในระดับนึงสำหรับผมแต่ในการทบทวนความรู้ก็จะพบได้ว่าเป็นสัปดาห์ที่เราได้ศึกษาเกี่ยวกับมนุษย์ได้ชัดเจนอย่างละเอียด",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    },
    {
        slug: "user-center-design",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/user-center.jpg",
        created_at: "March 20, 2025",
        title: "User Center Design [Lecture 3]",
        description: "ผลิตภัณฑ์หลายๆ ประเภทมีการออกแบบเพื่อให้ผู้ใช้งานสามารถใช้งานสิ่งๆ นั้นได้ง่ายและช่วยให้ผู้ใช้งานมีความเข้าใจในการทำงานของผลิตภัณฑ์ ดังนั้น Conceptual Model จะเป็นสิ่งที่เราควรจะศึกษาเพื่อให้ได้รู้ว่าเราควรออกแบบผลิตภัณฑ์ให้ผู้ใช้งานใช้งานได้ง่ายอย่างไรและมีความเข้าใจแบบไหน",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    },
    {
        slug: "user-experiences",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/user-experience.jpg",
        created_at: "March 23, 2025",
        title: "User Experiences [Lecture 4]",
        description: "เมื่อเราต้องการที่จะเริ่มต้นในการออกแบบผลิตภัณฑ์จะมีการเริ่มต้นแบบไหนถึงจะดีในสัปดาห์นี้การศึกษา User Experience จะทำให้เราเข้าใจได้ว่าเราจะออกแบบผลิตภัณฑ์อย่างไรให้มีความหมาย มอบประสบการณ์ที่ดีให้แก่ผู้ใช้งาน",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    },
    {
        slug: "interaction-design-basic",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/interaction-design.jpg",
        created_at: "March 25, 2025",
        title: "Interaction (Interfaces) Design Basic [Lecture 5]",
        description: "บ่อยครั้งที่เราได้ทำหรือคิดค้นจนออกแบบผลิตภัณฑ์อะไรสักอย่างนึงขึ้นมาแล้วจะเกิดความสงสัยว่าสิ่งที่เราได้ออกแบบมานั้นดีแล้วหรือยัง? เราจะรู้ได้อย่างไรในสัปดาห์นี้จึงจะได้เรียนรู้เกี่ยวกับการเลือก Interaction และ Rule ต่างๆ ในการออกแบบ",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanann Hanthongchai"
    },
    {
        slug: "prototyping",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/prototype.jpg",
        created_at: "March 27, 2025",
        title: "Prototyping [Lecture 6]",
        description: "บ่อยครั้งที่เรามักจะสงสัยว่า Prototype ที่ได้กล่าวถึงคืออะไรซึ่งเมื่อเราออกแบบผลิตภัณฑ์แต่ต้องมี Demo บางอย่างก่อนที่จะขึ้นเป็น Production จริงๆ การศึกษา Prototyping จึงเป็นสิ่งที่ควรจะเรียนรู้",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    },
    {
        slug: "extended-reality",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/extended-reality.jpg",
        created_at: "May 28, 2025",
        title: "eXtended Reality + 3D UI [Lecture 7]",
        description: "ในโลกของ Virtual Reality ที่เราได้รู้จักกันผ่านการเล่นเกมในอุปกรณ์ VR Headset นั้นจริงๆ แล้วมีเทคโนโลยีที่เกี่ยวข้องกันมากกว่าแค่ VR ซึ่งจะมีเทคโนโลยีอื่นๆ ที่เราจะได้เรียนรู้กันไม่ว่าจะเป็น Augmented Reality หรือ Mixed Reality",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    },
    {
        slug: "evaluation-method",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/evaluation.jpg",
        created_at: "May 29, 2025",
        title: "Evalution Method [Lecture 8]",
        description: "ในการทำ User Study ใน Project เราจะต้องรู้จักการคิดวิธีการทดลองหรือทำโครงการให้กับผู้ที่เข้าร่วมซึ่งรวมถึงการคิดคำถามเพื่อใช้ในการประเมินโดยเราจะสามารถเรียนรู้ได้จากเรื่อง Evaluation Method",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    },
    {
        slug: "data-visualization&information-architechture",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/data-visualization.jpg",
        created_at: "May 29, 2025",
        title: "Visual Concept and Data Visualization & Visual Design and Information Architechture [Lecture 9]",
        description: "ในชีวิตประจำวันเรามักจะต้องเจอกับ software ที่หลากหลายชนิดที่ถูกออกแบบมาจากผู้ที่มีึความเชี่ยวชาญในการออกแบบ Interface ในการให้เราได้ interact ซึ่งการศึกษาในเรื่องของการทำ User Interface หรือการแสดง Data Visualization จึงเป็นเรื่องที่สำคัญที่นักพัฒนาควรจะรู้",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    },
    {
        slug: "hypothesis-testing",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/statistic.jpg",
        created_at: "May 30, 2025",
        title: "Hypothesis Testing [Lecture 10]",
        description: "ในการทดลอง Project หรือ Prototype ของกลุ่มการที่จะทดลองว่าผลงานของตนเองมีแนวโน้มไปในทางที่ดีไหมเราควรที่จะต้องเก็บข้อมูลด้วยวิธีการต่างๆ และทำการประเมินซึ่งการประเมินในการศึกษานี้คือการทำ Hypothesis Testing",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    },
    {
        slug: "social-interaction",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/social-interaction.jpg",
        created_at: "May 31, 2025",
        title: "Social Interaction [Lecture 11]",
        description: "ในปัจจุบันเทคโนโลยีได้เข้ามามีบทบาทในทุกแง่มุมของชีวิตประจำวันและสิ่งที่เราได้รับผลกระทบอย่างชัดเจนคือ Social Interaction ไม่ว่าจะเป็นการพูดคุย ทำงานร่วมกับเพื่อน หรือเข้าสังคมซึ่งใน HCI เราจะมีศึกษาว่ามนุษย์สื่อสารกันอย่างไรและอื่นๆ",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    },
    {
        slug: "future-directions-in-hci",
        categories: ["Human Computer Interaction"],
        blog_image: "/assets/images/blog_image/future.jpg",
        created_at: "May 31, 2025",
        title: "Future Directions in HCI [Lecture 12]",
        description: "เทคโนโลยีนั้นถูกเปลี่ยนแปลงอย่างรวดเร็วและวิชา HCI จากที่เรานั้นศึกษามาก็ไม่ได้ถูกจำกัดอยู่แค่การทำ UX/UI อย่างที่ใครเข้าใจซึ่งเทคโนโลยีในอนาคตจะมีแนวโน้มเป็นอย่างไรเราสามารถทำความเข้าใจกับเรื่องของ Future Directions in HCI",
        author_image: "/assets/images/kanasanan.jpg",
        author_name: "Kanasanan Hanthongchai"
    }
];