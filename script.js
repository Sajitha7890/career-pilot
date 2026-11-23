// Career skills required for each career
const careerSkills = {

    // TECHNOLOGY
    "Software Developer": ["Programming", "Problem Solving", "Data Structures", "Git", "Web Development"],
    "AI Engineer": ["Python", "Mathematics", "Machine Learning", "Data Analysis", "Problem Solving"],
    "Cybersecurity Analyst": ["Networking", "Linux", "Security", "Programming", "Problem Solving"],
    "Data Analyst": ["Excel", "SQL", "Python", "Statistics", "Data Visualization"],
    "UI/UX Designer": ["Creativity", "Figma", "Wireframing", "User Research", "Prototyping"],

    // ENGINEERING
    "Mechanical Engineer": ["Mathematics", "Physics", "CAD", "Problem Solving", "Design"],
    "Civil Engineer": ["Mathematics", "Physics", "AutoCAD", "Structural Design", "Planning"],
    "Electrical Engineer": ["Electronics", "Circuit Design", "Mathematics", "Physics", "Problem Solving"],
    "Electronics Engineer": ["Electronics", "Circuit Design", "Programming", "Embedded Systems", "Testing"],
    "Aerospace Engineer": ["Mathematics", "Physics", "Aerodynamics", "CAD", "Problem Solving"],
    "Robotics Engineer": ["Programming", "Electronics", "Robotics", "Mathematics", "Mechanical Design"],

    // MEDICAL AND HEALTHCARE
    "Doctor": ["Biology", "Chemistry", "Medical Knowledge", "Communication", "Critical Thinking"],
    "Dentist": ["Biology", "Anatomy", "Manual Skills", "Communication", "Medical Knowledge"],
    "Nurse": ["Biology", "Patient Care", "Communication", "Empathy", "Medical Knowledge"],
    "Pharmacist": ["Chemistry", "Biology", "Pharmacology", "Attention to Detail", "Communication"],
    "Physiotherapist": ["Biology", "Anatomy", "Rehabilitation", "Communication", "Patient Care"],
    "Psychologist": ["Psychology", "Communication", "Listening", "Research", "Empathy"],
    "Nutritionist": ["Biology", "Nutrition", "Chemistry", "Communication", "Research"],

    // BUSINESS AND FINANCE
    "Entrepreneur": ["Leadership", "Communication", "Marketing", "Finance", "Problem Solving"],
    "Business Analyst": ["Data Analysis", "Communication", "Business Knowledge", "Excel", "Problem Solving"],
    "Marketing Manager": ["Marketing", "Creativity", "Communication", "Leadership", "Analytics"],
    "Human Resource Manager": ["Communication", "Leadership", "Recruitment", "Teamwork", "Management"],
    "Accountant": ["Accounting", "Mathematics", "Excel", "Attention to Detail", "Finance"],
    "Financial Analyst": ["Finance", "Excel", "Mathematics", "Data Analysis", "Research"],

    // MEDIA AND CONTENT CREATION
    "Content Creator": ["Creativity", "Communication", "Video Editing", "Storytelling", "Social Media"],
    "YouTuber": ["Content Creation", "Video Editing", "Communication", "Storytelling", "Creativity"],
    "Video Editor": ["Video Editing", "Creativity", "Storytelling", "Technical Skills", "Time Management"],
    "Journalist": ["Writing", "Communication", "Research", "Critical Thinking", "Storytelling"],
    "Photographer": ["Photography", "Creativity", "Editing", "Observation", "Visual Skills"],
    "Social Media Manager": ["Social Media", "Content Creation", "Marketing", "Communication", "Analytics"],

    // EDUCATION
    "Teacher": ["Subject Knowledge", "Communication", "Teaching", "Patience", "Classroom Management"],
    "Professor": ["Subject Knowledge", "Research", "Communication", "Teaching", "Presentation"],
    "Tutor": ["Subject Knowledge", "Communication", "Teaching", "Patience", "Problem Solving"],
    "Educational Consultant": ["Communication", "Research", "Education", "Planning", "Problem Solving"],

    // POLITICS AND PUBLIC SERVICE
    "Civil Servant": ["General Knowledge", "Communication", "Leadership", "Critical Thinking", "Public Administration"],
    "Political Researcher": ["Political Science", "Research", "Writing", "Critical Thinking", "Communication"],
    "Policy Analyst": ["Research", "Data Analysis", "Political Science", "Writing", "Critical Thinking"],
    "Lawyer": ["Legal Knowledge", "Communication", "Research", "Argumentation", "Critical Thinking"],
    "Diplomat": ["Communication", "International Relations", "Negotiation", "Research", "Cultural Awareness"],
    "Public Administrator": ["Leadership", "Management", "Communication", "Planning", "Public Administration"],

    // COMMUNICATION
    "Public Speaker": ["Communication", "Confidence", "Presentation", "Storytelling", "Leadership"],
    "Motivational Speaker": ["Communication", "Confidence", "Public Speaking", "Storytelling", "Leadership"],
    "Corporate Trainer": ["Communication", "Presentation", "Teaching", "Leadership", "Training"],

    // ARTS AND DESIGN
    "Graphic Designer": ["Creativity", "Photoshop", "Illustrator", "Typography", "Visual Design"],
    "Fashion Designer": ["Creativity", "Drawing", "Fashion Knowledge", "Design", "Sewing"],
    "Animator": ["Creativity", "Animation", "Drawing", "Storytelling", "Design"],
    "Interior Designer": ["Creativity", "Space Planning", "Design", "CAD", "Color Theory"],
    "Artist": ["Creativity", "Drawing", "Observation", "Visual Skills", "Art Techniques"]
};
// Update Skill Gap Analyzer career dropdown
const skillCareerDropdown = document.getElementById("skillCareer");

if (skillCareerDropdown) {
    skillCareerDropdown.innerHTML =
        '<option value="">Select a Career</option>';

    Object.keys(careerSkills).forEach(career => {
        const option = document.createElement("option");
        option.value = career;
        option.textContent = career;
        skillCareerDropdown.appendChild(option);
    });
}
 // ==========================================
// 1. CAREER DISCOVERY AND CAREER MATCH
// ==========================================

const careerGroups = {
    "Technology": [
        "Software Developer", "AI Engineer", "Cybersecurity Analyst",
        "Data Analyst", "UI/UX Designer"
    ],
    "Engineering": [
        "Mechanical Engineer", "Civil Engineer", "Electrical Engineer",
        "Electronics Engineer", "Aerospace Engineer", "Robotics Engineer"
    ],
    "Medical": [
        "Doctor", "Dentist", "Nurse", "Pharmacist",
        "Physiotherapist", "Psychologist", "Nutritionist"
    ],
    "Business": [
        "Entrepreneur", "Business Analyst", "Marketing Manager",
        "Human Resource Manager", "Accountant", "Financial Analyst"
    ],
    "Media and Content": [
        "Content Creator", "YouTuber", "Video Editor",
        "Journalist", "Photographer", "Social Media Manager"
    ],
    "Education": [
        "Teacher", "Professor", "Tutor", "Educational Consultant"
    ],
    "Politics and Public Service": [
        "Civil Servant", "Political Researcher", "Policy Analyst",
        "Lawyer", "Diplomat", "Public Administrator"
    ],
    "Communication": [
        "Public Speaker", "Motivational Speaker", "Corporate Trainer"
    ],
    "Arts and Design": [
        "Graphic Designer", "Fashion Designer", "Animator",
        "Interior Designer", "Artist"
    ]
};

const careerGroupKeywords = {
    "Technology": [
        "technology", "coding", "programming", "computer",
        "software", "apps", "websites", "artificial intelligence",
        "cybersecurity", "data", "designing apps"
    ],
    "Engineering": [
        "engineering", "machines", "construction", "build",
        "electronics", "robots", "vehicles", "circuits",
        "designing machines", "space"
    ],
    "Medical": [
        "medical", "medicine", "health", "hospital", "doctor",
        "patients", "biology", "human body", "healthcare",
        "helping people recover"
    ],
    "Business": [
        "business", "management", "money", "finance",
        "marketing", "entrepreneurship", "company",
        "leadership", "selling", "accounts"
    ],
    "Media and Content": [
        "content", "social media", "youtube", "video",
        "editing", "photography", "journalism", "writing",
        "influencer", "creating videos"
    ],
    "Education": [
        "teaching", "teacher", "education", "explaining",
        "students", "learning", "training", "school"
    ],
    "Politics and Public Service": [
        "politics", "government", "law", "public service",
        "social issues", "leadership", "country",
        "administration", "justice", "diplomacy"
    ],
    "Communication": [
        "public speaking", "speaking", "communication",
        "motivating", "presentations", "debating",
        "hosting", "confidence"
    ],
    "Arts and Design": [
        "art", "drawing", "painting", "fashion",
        "creativity", "design", "animation", "interior",
        "illustration"
    ]
};

document.getElementById("careerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const interests = document.getElementById("interests").value.toLowerCase();
    const skills = document.getElementById("skills").value.toLowerCase();
    const hobbies = document.getElementById("hobbies").value.toLowerCase();

    const userInput = interests + " " + skills + " " + hobbies;

    if (!userInput.trim()) {
        document.getElementById("careerResults").classList.remove("hidden");
        document.getElementById("careerList").innerHTML =
            "<p>Please enter your interests, skills or hobbies first.</p>";
        return;
    }

    let results = [];

    Object.keys(careerSkills).forEach(career => {
        let score = 0;
        let reasons = [];

        // Match career name
        if (userInput.includes(career.toLowerCase())) {
            score += 5;
            reasons.push("Your interests mention this career");
        }

        // Match required skills
        careerSkills[career].forEach(skill => {
            if (userInput.includes(skill.toLowerCase())) {
                score += 2;
                reasons.push(skill);
            }
        });

        // Match career field keywords
        Object.keys(careerGroups).forEach(group => {
            if (careerGroups[group].includes(career)) {
                const matchedKeywords = careerGroupKeywords[group].filter(keyword =>
                    userInput.includes(keyword)
                );

                if (matchedKeywords.length > 0) {
                    score += matchedKeywords.length * 3;
                    reasons.push("Interest in " + group);
                }
            }
        });

        results.push({
            career: career,
            score: score,
            reasons: [...new Set(reasons)]
        });
    });

    results.sort((a, b) => b.score - a.score);

    const topResults = results.slice(0, 5);

    document.getElementById("careerResults").classList.remove("hidden");

    document.getElementById("careerList").innerHTML = topResults.map((item, index) => `
        <div class="result-item">
            <h4>${index + 1}. ${item.career}</h4>
            <p><strong>Matching score:</strong> ${item.score}</p>
            <p><strong>Why it may suit you:</strong>
            ${item.reasons.length ? item.reasons.join(", ") : "Explore this career to see if it interests you."}</p>
        </div>
    `).join("");
});


// ==========================================
// 2. PERSONALIZED CAREER ROADMAP
// ==========================================

// Automatically add all careers to the roadmap dropdown

const roadmapDropdown = document.getElementById("roadmapCareer");

roadmapDropdown.innerHTML = `
    <option value="">Select a career</option>
`;

Object.keys(careerSkills).forEach(career => {
    const option = document.createElement("option");
    option.value = career;
    option.textContent = career;
    roadmapDropdown.appendChild(option);
});


// Generate a roadmap for the selected career

document.getElementById("showRoadmap").addEventListener("click", function() {

    const career = document.getElementById("roadmapCareer").value;
    const result = document.getElementById("roadmapResult");

    if (!career) {
        result.innerHTML = "<p>Please select a career first.</p>";
        return;
    }

    const skills = careerSkills[career];

    if (!skills) {
        result.innerHTML = "<p>Roadmap is not available for this career yet.</p>";
        return;
    }

    const steps = [
        `Explore the career of ${career}. Understand what professionals in this field do and what qualifications are commonly required.`,

        `Start learning the basics of ${skills[0] || "the subject"}. Use beginner-friendly books, videos or courses.`,

        `Develop your knowledge of ${skills[1] || "related skills"} and practise regularly.`,

        `Learn more about ${skills.slice(2, 4).join(" and ") || "other important skills"}. Try small projects or beginner activities related to this career.`,

        `Build practical experience through suitable projects, supervised activities, volunteering or learning opportunities.`,

        `Keep a record of your progress. Explore relevant courses, qualifications and possible future opportunities in this field.`
    ];

    result.innerHTML = `
        <h3>Your Career Roadmap: ${career}</h3>
        <p>Follow these beginner-friendly steps at your own pace.</p>

        ${steps.map((step, index) => `
            <div class="roadmap-step">
                <strong>Step ${index + 1}</strong>
                <p>${step}</p>
            </div>
        `).join("")}
    `;
});


// Send the first career discovery result to the roadmap

document.getElementById("makeRoadmap").addEventListener("click", function() {

    const firstCareer = document.querySelector("#careerList .result-item h4");

    if (!firstCareer) {
        alert("Please discover careers first!");
        return;
    }

    const career = firstCareer.textContent.replace(/^\d+\.\s*/, "");

    document.getElementById("roadmapCareer").value = career;

    document.getElementById("showRoadmap").click();

    document.getElementById("roadmap").scrollIntoView({
        behavior: "smooth"
    });
});
// 3. SKILL GAP ANALYZER

document.getElementById("analyzeSkills").addEventListener("click", function () {

    const career = document.getElementById("skillCareer").value;
    const input = document.getElementById("currentSkills").value;

    const result = document.getElementById("skillResult");

    if (!career) {
        result.innerHTML = "Please select a career first.";
        return;
    }

    const requiredSkills = careerSkills[career];

    if (!requiredSkills) {
        result.innerHTML = "Skills information is not available for this career yet.";
        return;
    }

    const userSkills = input
        .toLowerCase()
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");

    const matchedSkills = requiredSkills.filter(skill =>
        userSkills.includes(skill.toLowerCase())
    );

    const missingSkills = requiredSkills.filter(skill =>
        !userSkills.includes(skill.toLowerCase())
    );

    const percentage = Math.round(
        (matchedSkills.length / requiredSkills.length) * 100
    );

    result.innerHTML = `
        <h3>Skill Gap Analysis: ${career}</h3>

        <h4>Skill Match: ${percentage}%</h4>

        <p><strong>Skills You Already Have:</strong></p>
        ${
            matchedSkills.length
                ? matchedSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join(" ")
                : "No matching skills entered yet."
        }

        <p><strong>Skills You Need to Learn:</strong></p>
        ${
            missingSkills.length
                ? missingSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join(" ")
                : "Great! You listed all the skills in this career profile."
        }

        <h4>Your Next Steps</h4>
        <p>
            Focus on learning the missing skills one by one.
            Practise them through small projects, courses and activities.
        </p>
    `;
});
// 4. CAREER GUIDANCE CHAT

const chatForm = document.getElementById("chatForm");
const chatMessages = document.getElementById("chatMessages");
const chatQuestion = document.getElementById("chatQuestion");

const chatAnswers = [
    {
        keywords: ["hello", "hi", "hey"],
        answer: "Hello! Welcome to CareerPilot. Ask me about careers, qualifications, skills, courses or career opportunities!"
    },
    {
        keywords: ["doctor", "medical", "medicine", "mbbs", "surgeon"],
        answer: "To become a doctor, you generally need to complete Class 12 with Physics, Chemistry and Biology, qualify NEET-UG in India, and complete an MBBS degree. You can later specialise in areas such as surgery, cardiology or paediatrics."
    },
    {
        keywords: ["nurse", "nursing"],
        answer: "Nursing is a healthcare career focused on patient care. You can explore BSc Nursing or other recognised nursing programmes. Communication, patience and medical knowledge are useful skills."
    },
    {
        keywords: ["dentist", "dental"],
        answer: "Dentistry focuses on oral health. In India, the usual path is qualifying NEET-UG and completing a BDS degree from a recognised institution."
    },
    {
        keywords: ["pharmacist", "pharmacy"],
        answer: "Pharmacy involves medicines, their uses and safe handling. You can explore D.Pharm or B.Pharm programmes and check the applicable eligibility requirements."
    },
    {
        keywords: ["psychologist", "psychology"],
        answer: "Psychology explores human behaviour and mental processes. You can begin with a psychology degree and pursue further recognised qualifications for your chosen specialisation."
    },
    {
        keywords: ["engineer", "engineering"],
        answer: "Engineering has many branches: Computer Science, Mechanical, Civil, Electrical, Electronics, Aerospace and more. Explore your interests in mathematics, science, design and problem-solving."
    },
    {
        keywords: ["software developer", "software engineer", "coding", "programming"],
        answer: "Software developers build applications and websites. Learn programming languages such as C, Python or Java, practise Data Structures, learn Git and build projects."
    },
    {
        keywords: ["ai engineer", "artificial intelligence", "machine learning"],
        answer: "AI careers involve programming, mathematics, statistics and machine learning. Start with Python, strengthen your mathematics and gradually explore machine-learning projects."
    },
    {
        keywords: ["cybersecurity", "ethical hacking", "security analyst"],
        answer: "Cybersecurity professionals help protect computers, networks and information. Learn networking, Linux, programming and security fundamentals through legal practice environments."
    },
    {
        keywords: ["data analyst", "data science", "data scientist"],
        answer: "Data careers involve understanding information and finding useful patterns. Learn Excel, SQL, Python, statistics and data visualisation."
    },
    {
        keywords: ["civil engineer", "civil engineering"],
        answer: "Civil engineers work on infrastructure such as buildings, roads and bridges. Useful subjects include mathematics, physics, structural concepts and design tools such as AutoCAD."
    },
    {
        keywords: ["mechanical engineer", "mechanical"],
        answer: "Mechanical engineering focuses on machines, manufacturing and mechanical systems. Explore physics, mathematics, CAD tools and practical projects."
    },
    {
        keywords: ["business", "entrepreneur", "startup"],
        answer: "Business careers include entrepreneurship, management, marketing, finance and consulting. Develop communication, leadership, planning and financial knowledge."
    },
    {
        keywords: ["accountant", "accounting", "finance"],
        answer: "Finance and accounting careers involve money management, financial records and analysis. Explore accounting, mathematics, Excel and relevant qualifications such as CA."
    },
    {
        keywords: ["marketing", "digital marketing"],
        answer: "Marketing involves understanding customers and promoting products or services. Learn communication, market research, branding, content strategy and analytics."
    },
    {
        keywords: ["teacher", "teaching", "professor"],
        answer: "Teaching involves explaining concepts and helping others learn. Build subject knowledge and communication skills, then explore the recognised teaching qualifications required for your chosen level."
    },
    {
        keywords: ["content creator", "content creation", "youtuber", "influencer"],
        answer: "Content creation involves making useful or entertaining videos, posts and other media. Practise storytelling, editing, communication and audience research. Build a portfolio of original work."
    },
    {
        keywords: ["journalist", "journalism", "reporter"],
        answer: "Journalism involves researching, verifying and communicating information. Develop writing, interviewing, critical thinking and media literacy skills."
    },
    {
        keywords: ["photographer", "photography", "video editor", "editing"],
        answer: "Creative media careers include photography, video editing and filmmaking. Practise visual storytelling, editing software and portfolio development."
    },
    {
        keywords: ["politics", "politician", "political"],
        answer: "Politics involves public issues, leadership and decision-making. Explore political science, history, economics, communication and public policy."
    },
    {
        keywords: ["ias", "ips", "civil service", "upsc", "civil servant"],
        answer: "Civil services in India offer careers in public administration and governance. A recognised bachelor's degree is generally required for UPSC Civil Services eligibility. Preparation includes current affairs, general studies and analytical skills."
    },
    {
        keywords: ["lawyer", "law", "advocate"],
        answer: "Law careers involve understanding legal systems, research and representing people or organisations. Explore a recognised 5-year integrated law degree after Class 12 or a 3-year LLB after graduation."
    },
    {
        keywords: ["public speaker", "public speaking", "speaker"],
        answer: "Public speaking involves presenting ideas confidently to an audience. Practise speech structure, storytelling, research, voice clarity and presentation skills."
    },
    {
        keywords: ["designer", "design", "ui ux", "graphic design"],
        answer: "Design careers combine creativity and problem-solving. Explore graphic design, UI/UX, visual communication and tools such as Figma. Build a portfolio of your designs."
    },
    {
        keywords: ["career", "which career", "choose career"],
        answer: "Choosing a career depends on your interests, strengths, values and goals. Explore different fields, try small projects and research the qualifications required before deciding."
    },
    {
        keywords: ["skills", "learn", "improve"],
        answer: "Start with communication, problem-solving, digital literacy, teamwork and time management. Then develop technical skills related to the career you want to explore."
    },
    {
        keywords: ["project", "projects"],
        answer: "Try small projects related to your interests. For example, build a website, create a portfolio, analyse a dataset, design a poster or prepare a research presentation."
    },
    {
        keywords: ["roadmap", "how to start", "steps"],
        answer: "A good starting roadmap is: explore the career, understand its qualifications, learn the basic skills, practise through projects, build a portfolio and seek guidance from qualified people."
    },
    {
        keywords: ["internship"],
        answer: "Internships help you understand real work environments. Build relevant skills, prepare a simple resume and look for suitable beginner opportunities."
    },
    {
        keywords: ["salary", "income", "earn"],
        answer: "Salary depends on the career, qualifications, experience, location and employer. Research current salary information for the specific role instead of relying on one fixed figure."
    },
    {
        keywords: ["thank", "thanks"],
        answer: "You're welcome! Keep exploring and learning. CareerPilot is here to help you understand your options."
    }
];

function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = sender;
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

if (chatForm) {
    chatForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const question = chatQuestion.value.trim().toLowerCase();

        if (!question) return;

        addMessage(chatQuestion.value.trim(), "user-message");

        const matchedAnswer = chatAnswers.find(item =>
            item.keywords.some(keyword => question.includes(keyword))
        );

        const answer = matchedAnswer
            ? matchedAnswer.answer
            : "I can help with careers in medical, engineering, business, politics, teaching, content creation, law, design and more. Try asking about a specific career, its skills, qualifications or how to get started.";

        setTimeout(() => {
            addMessage(answer, "bot-message");
        }, 300);

        chatQuestion.value = "";
    });
}
// 5. CAREER SIMULATION MODE

const simulationCareer = document.getElementById("simulationCareer");
const startSimulation = document.getElementById("startSimulation");
const simulationTask = document.getElementById("simulationTask");

// Add all careers automatically to the dropdown
if (simulationCareer) {
    simulationCareer.innerHTML = '<option value="">Choose a career</option>';

    Object.keys(careerSkills).forEach(career => {
        const option = document.createElement("option");
        option.value = career;
        option.textContent = career;
        simulationCareer.appendChild(option);
    });
}

// Career-based practical activities
function getSimulation(career) {
    const name = career.toLowerCase();

    if (/doctor|dentist|nurse|pharmacist|physiotherapist|psychologist|nutritionist/.test(name)) {
        return {
            title: "Healthcare Challenge",
            task: "A person visits a healthcare centre and explains that they are feeling unwell. What questions would you ask to understand their concerns, and why is listening important?",
            hint: "Think about communication, empathy and understanding. This is an educational activity, not a medical diagnosis."
        };
    }

    if (/teacher|professor|tutor|educational/.test(name)) {
        return {
            title: "Teaching Challenge",
            task: "Imagine you need to teach a student what photosynthesis means. Explain it in simple words and give one example.",
            hint: "Try explaining the topic as if you are teaching a beginner."
        };
    }

    if (/business|entrepreneur|marketing|human resource|accountant|financial/.test(name)) {
        return {
            title: "Business Challenge",
            task: "Imagine you are starting a small business. Suggest one product or service, identify your target customers and explain how you would promote it.",
            hint: "Think about customers, planning, budgeting and marketing."
        };
    }

    if (/political|civil servant|policy|diplomat|public administrator|lawyer/.test(name)) {
        return {
            title: "Public Service Challenge",
            task: "Imagine your community needs better waste management. Suggest three practical steps that local authorities and citizens could take.",
            hint: "Think about public needs, fairness, teamwork and practical solutions."
        };
    }

    if (/content creator|youtuber|journalist|social media|photographer|video editor/.test(name)) {
        return {
            title: "Content Creation Challenge",
            task: "Plan a short video or social media post about an interesting topic. Write its title, target audience and a short description.",
            hint: "Think about creativity, storytelling and audience engagement."
        };
    }

    if (/public speaker|motivational speaker|corporate trainer/.test(name)) {
        return {
            title: "Public Speaking Challenge",
            task: "Imagine you have to speak for one minute about the importance of learning new skills. Write the opening lines of your speech and three main points.",
            hint: "Use a strong opening, clear points and a memorable ending."
        };
    }

    if (/engineer|robotics|aerospace/.test(name)) {
        return {
            title: "Engineering Challenge",
            task: "Imagine you need to design a simple device that helps students save time in their daily routine. Describe your idea, how it works and what materials it might need.",
            hint: "Think about problem-solving, design and practical use."
        };
    }

    if (/software|ai engineer|cybersecurity|data analyst/.test(name)) {
        return {
            title: "Technology Challenge",
            task: "Imagine you are creating an application for students. Suggest three useful features and explain how each feature would help students.",
            hint: "Think about users, problem-solving and simple technology solutions."
        };
    }

    if (/designer|artist|animator|fashion|interior/.test(name)) {
        return {
            title: "Creative Design Challenge",
            task: "Imagine you have to design something for a college event. Describe your design idea, the colours you would use and the message you want to communicate.",
            hint: "Think about creativity, visual communication and your audience."
        };
    }

    return {
        title: "Career Skills Challenge",
        task: "Imagine you are working in this career. Describe one problem you might face, how you would solve it and which skills you would use.",
        hint: "Think about communication, creativity, teamwork and problem-solving."
    };
}

// Start the selected career simulation
if (startSimulation) {
    startSimulation.addEventListener("click", function () {
        const career = simulationCareer.value;

        if (!career) {
            simulationTask.innerHTML = "<p>Please select a career first!</p>";
            return;
        }

        const activity = getSimulation(career);

        simulationTask.innerHTML = `
            <div class="result-item">
                <h3>${career} - ${activity.title}</h3>
                <p><strong>Your Task:</strong></p>
                <p>${activity.task}</p>
                <p><strong>Hint:</strong> ${activity.hint}</p>

                <textarea id="simulationAnswer"
                    rows="5"
                    placeholder="Write your answer here..."
                    style="width:100%; padding:12px; margin-top:10px;">
                </textarea>

                <button type="button" id="submitSimulation">
                    Submit Answer
                </button>

                <div id="simulationFeedback"></div>
            </div>
        `;

        document.getElementById("submitSimulation").addEventListener("click", function () {
            const answer = document.getElementById("simulationAnswer").value.trim();
            const feedback = document.getElementById("simulationFeedback");

            if (answer.length < 10) {
                feedback.innerHTML = "<p>Please write a little more so you can explain your idea clearly.</p>";
                return;
            }

            feedback.innerHTML = `
                <h4>Great effort!</h4>
                <p>You completed the ${career} activity.</p>
                <p>Review your answer: Is it clear, practical and well explained?</p>
                <p>Keep practising your skills!</p>
            `;
        });
    });
}