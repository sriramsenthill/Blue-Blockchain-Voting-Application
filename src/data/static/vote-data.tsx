import { v4 as uuidv4 } from 'uuid';

export const cripticVotes = [
  {
    id: 'Labour Party',
    title: 'Rachel Wu',
    accepted: {
      vote: 10303,
      percentage: 90,
    },
    rejected: {
      vote: 303,
      percentage: 10,
    },
    executed_at: '2022-10-01T01:02:03',
    proposed_by: {
      id: '0x9aba...0bd8',
      link: '#',
    },
    status: 'active',
    votes: [
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
    ],
    description: `
      <h6>Vision and Goals</h6>
      <p>Rachel Wu's vision and goals are focused on fostering inclusive communities, promoting sustainable development, and advocating for social equity. She aims to create environments where diversity is embraced, and all individuals have equal access to opportunities for growth and contribution. Rachel's efforts to address systemic inequalities are reflected in her grassroots initiatives and advocacy work, which prioritize amplifying the voices of marginalized groups and addressing societal disparities. She emphasizes transparency, accountability, and inclusive decision-making in governance, striving to engage constituents in the policy-making process to better reflect their needs and aspirations. Rachel's overarching goal is to promote economic growth while prioritizing environmental sustainability, aiming to ensure a legacy of prosperity for future generations. Through collaboration and innovation, she seeks to bridge divides and foster unity, working towards tangible progress and positive change in society.</p>
       
       
       
    `,
    action: [
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
    ],
  },
  {
    id: '2',
    title: 'George',
    accepted: {
      vote: 303,
      percentage: 30,
    },
    rejected: {
      vote: 787,
      percentage: 70,
    },
    executed_at: '2021-02-01T01:02:03',
    proposed_by: {
      id: '0x9aba...0bd8',
      link: '#',
    },
    status: 'past',
    votes: [
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
    ],
    description: `
      <h6>Vision and Goals</h6>
      <p>Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum pools until the end of October. Extend prizes and drip for the POOL pool as well.</p>
       
       
       
    `,
    action: [
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
    ],
  },
  {
    id: '3',
    title: 'Unity Alliance',
    accepted: {
      vote: 7303,
      percentage: 87,
    },
    rejected: {
      vote: 813,
      percentage: 23,
    },
    status: 'past',
    executed_at: '2021-07-01T01:02:03',
    proposed_by: {
      id: '0x9aba...0bd8',
      link: '#',
    },
    votes: [
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
    ],
    description: `
      <h6>Vision and Goals</h6>
      <p>Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum pools until the end of October. Extend prizes and drip for the POOL pool as well.</p>
       
       
       
    `,
    action: [
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
    ],
  },
  {
    id: '4',
    title: 'George Bush',
    accepted: {
      vote: 9303,
      percentage: 90,
    },
    rejected: {
      vote: 989,
      percentage: 10,
    },
    status: 'past',
    executed_at: '2021-03-01T01:02:03',
    proposed_by: {
      id: '0x9aba...0bd8',
      link: '#',
    },
    votes: [
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
    ],
    description: `
      <h6>Vision and Goals</h6>
      <p>Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum pools until the end of October. Extend prizes and drip for the POOL pool as well.</p>
       
       
       
    `,
    action: [
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
    ],
  },
  {
    id: 'Liberty Party',
    title: 'George Bush',
    accepted: {
      vote: 10303,
      percentage: 90,
    },
    rejected: {
      vote: 303,
      percentage: 10,
    },
    executed_at: '2022-11-01T01:01:11',
    proposed_by: {
      id: '0x9aba...0bd8',
      link: '#',
    },
    status: 'active',
    votes: [
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
    ],
    description: `
      <h6>Vision and Goals</h6>
      <p>George Bush is a principled leader deeply committed to serving his country with integrity and dedication. With a background in public service and a strong sense of duty, George brings a wealth of experience and a genuine desire to make a positive impact on society.
      Having served in various roles within the community and government, George has demonstrated a steadfast commitment to upholding democratic values and promoting the welfare of his fellow citizens. Through his leadership, George has advocated for policies that prioritize the well-being and prosperity of all Americans.
      He promises to prioritize economic growth and job creation, ensuring that opportunities for success are accessible to all Americans. Through collaboration and empathy, George is committed to building bridges across divides and fostering unity, striving to create a brighter and more prosperous future for generations to come.</p>
       
       
       
    `,
    action: [
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
    ],
  },
  {
    id: 'Equality Front',
    title: 'Maduro Gabriel',
    accepted: {
      vote: 1003,
      percentage: 90,
    },
    rejected: {
      vote: 303,
      percentage: 10,
    },
    executed_at: '2022-11-05T01:06:15',
    proposed_by: {
      id: '0x9aba...0bd8',
      link: '#',
    },
    status: 'active',
    votes: [
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
    ],
    description: `
      <h6>Vision and Goals</h6>
      <p>Madaro Gabriel is a visionary leader known for his unwavering commitment to progress and innovation. Born and raised in a small town, Madaro's humble beginnings have shaped his perspective and fueled his drive to make a difference in the world. With a keen intellect and a compassionate heart, Madaro is dedicated to uplifting communities and empowering individuals from all walks of life.
      Madaro promises to continue championing causes that promote equality, justice, and environmental stewardship. With a focus on innovation and collaboration, he aims to harness the power of technology and entrepreneurship to create opportunities for marginalized communities and drive sustainable development. Madaro is committed to fostering dialogue, building bridges, and fostering a culture of empathy and understanding. His vision for the future is one of hope, resilience, and shared prosperity, where every individual has the opportunity to thrive and contribute to a brighter tomorrow.</p>
       
       
       
    `,
    action: [
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
    ],
  },
  {
    id: 'Innovation Party',
    title: 'Josh Fawley',
    accepted: {
      vote: 11003,
      percentage: 90,
    },
    rejected: {
      vote: 303,
      percentage: 10,
    },
    executed_at: '2022-12-08T01:04:04',
    proposed_by: {
      id: '0x9aba...0bd8',
      link: '#',
    },
    status: 'active',
    votes: [
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 32125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 26081,
        status: 'rejected',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 2125,
        status: 'accepted',
      },
      {
        voter: { id: '0x9aba...0bd8', link: '#' },
        voting_weight: 6081,
        status: 'accepted',
      },
      {
        voter: { id: '0x956aba...0263bd8', link: '#' },
        voting_weight: 181,
        status: 'rejected',
      },
    ],
    description: `
      <h6>Vision and Goals</h6>
      <p>Throughout his career, Josh has been actively involved in various community initiatives and social justice campaigns. From organizing neighborhood clean-up events to advocating for affordable housing and education reform, Josh has demonstrated a deep commitment to creating a more equitable and inclusive society. His tireless efforts and unwavering dedication have earned him the respect and admiration of his peers and constituents.</p>
      <P>Josh promises to continue fighting for the rights and well-being of all members of his community. With a focus on collaboration and grassroots engagement, he aims to amplify the voices of marginalized groups and address systemic injustices. Josh is committed to advocating for policies that promote social and economic equality, affordable healthcare, and access to quality education. His vision for the future is one of unity, compassion, and opportunity, where every individual has the chance to thrive and fulfill their potential..</p>
      > 
       
       
    `,
    action: [
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
      {
        id: uuidv4(),
        contract: {
          id: '0x9aba...0bd8',
          link: '#',
        },
        method: 'transfer(address,uint256)',
        inputs:
          '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
      },
    ],
  },
];

// getVotesByStatus
export function getVotesByStatus(status: string) {
  const votesByStatus = cripticVotes.filter((vote) => vote.status === status);
  return {
    votes: votesByStatus,
    totalVote: votesByStatus.length,
  };
}
