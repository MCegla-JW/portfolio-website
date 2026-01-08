
const careers = [
    {
        id: 0,
        companyName: 'General Assembly',
        jobTitle: 'Software Engineering Bootcamp Student',
        startDate: '2025',
        endDate: '2025',
        description: 'A full-time, 12-week remote software engineering bootcamp focused on full-stack development using JavaScript, React, Python, APIs, databases, and Git; delivered three solo projects and one paired project in an agile environment.'
    },
    {
        id: 1,
        companyName: 'PEI Group',
        jobTitle: 'Event Manager',
        startDate: '2024',
        endDate: '2025',
        description: 'Project-managed large-scale, in-person conferences with up to 700 attendees and 30+ sponsors, delivering full end-to-end logistics from planning through post-event analysis. Managed budgets, cross-functional stakeholders, and data-driven performance tracking to ensure smooth execution and measurable outcomes.'
    },
    {
        id: 2,
        companyName: 'Wood Mackenzie',
        jobTitle: 'Senior Event Specialist - EMEA Operations Lead',
        startDate: '2023',
        endDate: '2024',
        description: 'Led delivery of 30+ regional events annually, managing end-to-end project execution across forums, summits, and webinars. Coordinated cross-functional teams, vendors, and budgets while using project data to support insight-driven decision-making.'
    },
    {
        id: 3,
        companyName: 'Hanson Wade',
        jobTitle: 'Senior Event Coordinator',
        startDate: '2022',
        endDate: '2023',
        description: 'Led delivery of complex, multi-track B2B events for 50–650 attendees, overseeing speaker management, sponsor deliverables, and end-to-end logistics. Mentored junior team members, owned risk and contingency planning, and drove internal process improvements using event tech platforms.'
    },
    {
        id: 4,
        companyName: 'Hanson Wade',
        jobTitle: 'Event Coordinator',
        startDate: '2022',
        endDate: '2022',
        description: 'Supported the delivery of large-scale B2B events by managing high-volume operational data including registrations, travel manifests, rooming lists, and dietary requirements. Coordinated venue logistics, AV, signage, and health & safety to ensure smooth on-site execution.'
    },
        {
        id: 5,
        companyName: 'Hanson Wade',
        jobTitle: ' Digital Event Coordinator',
        startDate: '2021',
        endDate: '2022',
        description: 'Delivered 1–2 digital and hybrid events per month using Hopin and Zoom, configuring virtual environments, running technical rehearsals, and troubleshooting live issues. Worked cross-functionally to meet campaign objectives and analysed platform data to optimise user experience and event performance.'
    }
]

const Career = () => {
    return (
<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
    {careers.map((career, index) => (
  <li key={career.id}>
  {index !== 0 && <hr/>} 
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className={`${
        index % 2 === 0 ? "timeline-start mb-10 md:text-end" : "timeline-end"} mb-10`}>
      <time className="font-mono italic">{career.startDate} - {career.endDate}</time>
      <div className="text-lg font-black">{career.companyName}</div>
        <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
        <input type="checkbox" />
        <div className="collapse-title font-semibold flex gap-2 items-center ">{career.jobTitle}</div>
         <div className="collapse-content text-sm">
        {career.description}
  </div>
</div>
    </div>
    <hr />
  </li>
    ))}
    </ul>
    )
}

export default Career 