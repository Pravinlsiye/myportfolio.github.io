const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Pravinlsiye',
  title: 'Pravin.L',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pravin L',
  role: 'Developer',
  description:
    'Self-motivated,highly passionate about technology and a hardworking fresherlooking for an opportunity to work ina organization to utilize my skills and knowledge to work for growth of the organization.',
  resume: "https://docs.google.com/document/d/1q7D-t9NZXDmrkcWYWXG4BEooVml7Q6J30AFfBODQMN8/export?format=pdf",
  social: {
    linkedin: 'https://www.linkedin.com/in/pravinsiye',
    github: 'https://github.com/Pravinlsiye',
    // Instagram: 'https://www.instagram.com/mr_siye/'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Simple Portfolio ',
    description:
      "A Simple Portfolio made with HTML and Css .It's a single page portfolio which contain all the major info that are requried ",
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/Pravinlsiye/Simple-portfolio',
    livePreview: 'https://pravinlsimpleportfolio.netlify.app/',
  },
  {
    name: 'E-commerce Website',
    description:
      'E-commerce website for Sakthi Murgan Traders.A website contain all basic needs of Sathi Murgan Traders',
    stack: ['EJS', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com/Pravinlsiye/Smt-website.git',
    livePreview: 'https://github.com/Pravinlsiye/Smt-website.git',
  },
  {
    name: 'Website Status Checker',
    description:
      'Website Status checker is project which check the current status of website whether the website is Online or Offline',
    stack: ['Python', 'Aiohttp'],
    sourceCode: 'https://github.com/Pravinlsiye/web-status-checks',
   // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Python',
  'c',
  'HTML',
  'CSS',
  'JavaScript',
  'Sql',
  'React',
  'Linux',
  'Iot',
  'Git',
  'Docker',
  'Azure',
  'AWS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pravin270320@gmail.com',
}

export { header, about, projects, skills, contact }
