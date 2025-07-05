import './About.css';
import profile from '../../assets/profile.jpg'; 

function About() {
  return (
    <section id="about" className='about-container'>
      <h5>About Me</h5>
      <div className='about-content'>
        <div className='profile-img'>
          <img src={profile} alt="M.A. Diganta Profile" />
        </div>
        <div className='profile-des'>
          <h6 className='title'>Aspiring Full-Stack Developer</h6>
          <p className='title-tag'>Driven by curiosity, shaped by experience, and committed to excellence.</p>
          <p className='story'>
            I&#39;m M.A. Diganta, currently pursuing a Master of Information Technology at the <strong>University of Technology Sydney (UTS)</strong>, driven by a passion for software engineering and digital innovation.
            <br /><br />
            Prior to my postgraduate studies, I completed my Bachelor’s in Computer Science and Engineering at <strong>BRAC University</strong> in 2024, where I explored a broad tech stack including Python, JavaScript, Java, and PHP. I also ventured into machine learning and artificial intelligence, incorporating them into my thesis and personal projects.
            <br /><br />
            After graduation, I joined <strong>Dream71 Bangladesh Ltd.</strong>—a renowned software firm—as a Software Engineering Intern. There, I gained valuable hands-on experience, working on full-stack applications using Vue.js, Nuxt, and Laravel. This internship helped sharpen my ability to build scalable systems and collaborate with development teams.
            <br /><br />
            Alongside academics, I served as a Student Tutor for multiple semesters, mentoring peers in programming fundamentals and debugging techniques. I also co-founded small startups with friends, which taught me the importance of teamwork, ownership, and user-centric thinking.
            <br /><br />
            Today, I’m focused on mastering modern web technologies and building impactful digital solutions. I’m a dedicated learner with a growth mindset, always exploring new ways to contribute and lead in the evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
