import Marquee from "react-fast-marquee";

const Technologies = () => {
  const backendTechnologies = [
    { src: "/assets/techstacks/go.png", alt: "Go", label: "Go" },
    { src: "/assets/techstacks/python.png", alt: "Python", label: "Python" },
    { src: "/assets/techstacks/nodejs.png", alt: "NodeJS", label: "NodeJS" },
    { src: "/assets/techstacks/java.png", alt: "Java", label: "Java" },
    { src: "/assets/techstacks/javascript.png", alt: "JavaScript", label: "JavaScript" },
    { src: "/assets/techstacks/css3.png", alt: "CSS3", label: "CSS3" },
    { src: "/assets/techstacks/html5.png", alt: "HTML5", label: "HTML5" },
    { src: "/assets/techstacks/android.png", alt: "Android", label: "Android" },
    { src: "/assets/techstacks/ios.jpeg", alt: "iOS", label: "iOS" },
    { src: "/assets/techstacks/pwa.png", alt: "PWA", label: "PWA" },
    { src: "/assets/techstacks/react-native.png", alt: "React Native", label: "React Native" },
    { src: "/assets/techstacks/typescript.png", alt: "TypeScript", label: "TypeScript" },
  ];

  const frontendTechnologies = [
    { src: "/assets/techstacks/vue.png", alt: "Vue", label: "Vue" },
    { src: "/assets/techstacks/angular.png", alt: "Angular", label: "Angular" },
    { src: "/assets/techstacks/swift.png", alt: "Swift", label: "Swift" },
    { src: "/assets/techstacks/flutter.png", alt: "Flutter", label: "Flutter" },
    { src: "/assets/techstacks/jquery.png", alt: "jQuery", label: "jQuery" },
    { src: "/assets/techstacks/wordpress.webp", alt: "WordPress", label: "WordPress" },
    { src: "/assets/techstacks/shopify.webp", alt: "Shopify", label: "Shopify" },
    { src: "/assets/techstacks/mongodb.png", alt: "MongoDB", label: "MongoDB" },
    { src: "/assets/techstacks/mysql.png", alt: "MySQL", label: "MySQL" },
    { src: "/assets/techstacks/postgres.png", alt: "PostgreSQL", label: "PostgreSQL" },
    { src: "/assets/techstacks/elasticSearch.png", alt: "ElasticSearch", label: "ElasticSearch" },
    { src: "/assets/techstacks/redis.png", alt: "Redis", label: "Redis" },
  ];

  const cloudServices = [
    { src: "/assets/techstacks/aws.png", alt: "AWS", label: "AWS" },
    { src: "/assets/techstacks/microsoft-azure.png", alt: "Azure", label: "Azure" },
    { src: "/assets/techstacks/gcp.png", alt: "GCP", label: "GCP" },
    { src: "/assets/techstacks/docker.png", alt: "Docker", label: "Docker" },
    { src: "/assets/techstacks/kubernetes.png", alt: "Kubernetes", label: "Kubernetes" },
    { src: "/assets/techstacks/gitlab.png", alt: "GitLab", label: "GitLab" },
    { src: "/assets/techstacks/github.png", alt: "GitHub", label: "GitHub" },
    { src: "/assets/techstacks/bitbucket.png", alt: "Bitbucket", label: "Bitbucket" },
    { src: "/assets/techstacks/terraform.png", alt: "Terraform", label: "Terraform" },
    { src: "/assets/techstacks/ansible.png", alt: "Ansible", label: "Ansible" },
    { src: "/assets/techstacks/jira.webp", alt: "Jira", label: "Jira" },
    { src: "/assets/techstacks/atlassian1.png", alt: "Atlassian", label: "Atlassian" },
  ];

  const testingAutomation = [
    { src: "/assets/techstacks/selenium.png", alt: "Selenium", label: "Selenium" },
    { src: "/assets/techstacks/appium.png", alt: "Appium", label: "Appium" },
    { src: "/assets/techstacks/browserstack.png", alt: "BrowserStack", label: "BrowserStack" },
    { src: "/assets/techstacks/chai.png", alt: "Chai", label: "Chai" },
    { src: "/assets/techstacks/cucumber.png", alt: "Cucumber", label: "Cucumber" },
    { src: "/assets/techstacks/cypress.png", alt: "Cypress", label: "Cypress" },
    { src: "/assets/techstacks/jmeter.png", alt: "JMeter", label: "JMeter" },
    { src: "/assets/techstacks/junit.png", alt: "JUnit", label: "JUnit" },
    { src: "/assets/techstacks/magento.webp", alt: "Magento", label: "Magento" },
    { src: "/assets/techstacks/mocha.png", alt: "Mocha", label: "Mocha" },
    { src: "/assets/techstacks/testng.png", alt: "TestNG", label: "TestNG" },
    { src: "/assets/techstacks/nunit.webp", alt: "NUnit", label: "NUnit" },
    { src: "/assets/techstacks/postman.png", alt: "Postman", label: "Postman" },
  ];


  return (
    <div className="Technologies py-8 px-4">
      <Marquee direction="right" gradient={false} pauseOnClick={false} pauseOnHover={false} speed={60}>
        {backendTechnologies.map((tech, index) => (
          <div key={index} className="marquee-item">
            <img src={tech.src} alt={tech.alt} className="w-24 h-24 mx-6 my-2" />
          </div>
        ))}
      </Marquee>

      <Marquee direction="left" gradient={false} pauseOnClick={false} pauseOnHover={false} speed={60}>
        {frontendTechnologies.map((tech, index) => (
          <div key={index} className="marquee-item">
            <img src={tech.src} alt={tech.alt} className="w-24 h-24 mx-6 my-2" />
          </div>
        ))}
      </Marquee>

      <Marquee direction="right" gradient={false} pauseOnClick={false} pauseOnHover={false} speed={60}>
        {cloudServices.map((service, index) => (
          <div key={index} className="marquee-item">
            <img src={service.src} alt={service.alt} className="w-24 h-24 mx-6 my-2" />
          </div>
        ))}
      </Marquee>

      <Marquee direction="left" gradient={false} pauseOnClick={false} pauseOnHover={false} speed={60}>
        {testingAutomation.map((tool, index) => (
          <div key={index} className="marquee-item">
            <img src={tool.src} alt={tool.alt} className="w-24 h-24 mx-6 my-2" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Technologies;
