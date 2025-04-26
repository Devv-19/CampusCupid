// Already existing
function showHome() {
    hideAllSections();
    document.getElementById('home').style.display = 'block';
  }
  
  function showSignUp() {
    hideAllSections();
    document.getElementById('signup').style.display = 'block';
  }
  
  function showLogin() {
    hideAllSections();
    document.getElementById('login').style.display = 'block';
  }
  
  function showProfile() {
    hideAllSections();
    document.getElementById('profile').style.display = 'block';
  }
  
  function showMatch() {
    hideAllSections();
    document.getElementById('match').style.display = 'block';
  }
  
  function showContact() {
    hideAllSections();
    document.getElementById('contact').style.display = 'block';
  }
  
  function hideAllSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.display = 'none';
    });
  }
  
  // Matching feature
  const matches = [
    {
      name: "Parit Kharwa",
      pic: "https://via.placeholder.com/150",
      bio: '"Guitar, cats, and romantic songs 🎸🐱"',
    },
    {
      name: "Dhrumil Vasava",
      pic: "https://via.placeholder.com/150/0000FF",
      bio: '"Gym, movies, and Marvel fan 💪🎬"',
    },
    {
      name: "Divya Tondon",
      pic: "https://via.placeholder.com/150/FF69B4",
      bio: '"Books, activism, and magical vibes 📚✨"',
    },
    {
      name: "Rajat Dalal",
      pic: "https://via.placeholder.com/150/8A2BE2",
      bio: '"Music, tattoos, and chill energy 🎤🖤"',
    },
  ];
  
  function nextMatch() {
    const random = matches[Math.floor(Math.random() * matches.length)];
    document.getElementById("matchName").textContent = random.name;
    document.getElementById("matchBio").textContent = random.bio;
    document.getElementById("matchPic").src = random.pic;
  }
  
  function likeMatch() {
    alert('You liked this profile! 💖');
    nextMatch();
  }
  
  // ✅ ADD THESE - handle signup form submission
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // After signup, go to profile
    showProfile();
  });
  
  // ✅ ADD THESE - handle login form submission
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // After login, go to profile
    showProfile();
  });
  
  // Contact form
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("contactForm").reset();
    document.getElementById("thankYouMessage").style.display = "block";
  });
  