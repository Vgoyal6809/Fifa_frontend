import { SiPandas, SiTensorflow, SiScikitlearn, SiAzuredevops, SiJupyter } from 'react-icons/si';
import { 
    FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, 
    FaGithub 
  } from 'react-icons/fa';
  import { IoAnalyticsOutline } from 'react-icons/io5';
  
export const technologies = {
    frontend: [
      {
        name: 'React JS',
        description: 'JavaScript library for UI development.',
        icon: <FaReact />,
      },
      {
        name: 'JavaScript',
        description: 'Dynamic language for web development.',
        icon: <FaJs />,
      },
      {
        name: 'HTML',
        description: 'Standard markup for creating web pages.',
        icon: <FaHtml5 />,
      },
      {
        name: 'CSS',
        description: 'Style sheet language for web design.',
        icon: <FaCss3Alt />,
      },
    ],
    backend: [
      {
        name: 'Python',
        description: 'High-level programming language.',
        icon: <FaPython />,
      },
      {
        name: 'Jupyter Notebook',
        description: 'Interactive computational environment.',
        icon: <SiJupyter />,
      },
    ],
    machineLearning: [
      {
        name: 'Pandas',
        description: 'Data analysis and manipulation tool.',
        icon: <SiPandas />,
      },
      {
        name: 'Matplotlib',
        description: 'Plotting library for Python.',
        icon: <IoAnalyticsOutline />,
      },
      {
        name: 'Scikit-Learn',
        description: 'Machine learning library for Python.',
        icon: <SiScikitlearn />,
      },
      {
        name: 'TensorFlow',
        description: 'End-to-end machine learning platform.',
        icon: <SiTensorflow />,
      },
    ],
    collaboration: [
      {
        name: 'GitHub',
        description: 'Version control and collaboration platform.',
        icon: <FaGithub />,
      },
      {
        name: 'Azure DevOps',
        description: 'Project management and CI/CD tools.',
        icon: <SiAzuredevops />,
      },
    ],
  };