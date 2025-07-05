import JobListings from '../components/JobListings';

const AllJobsPage = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <JobListings isHome={false} />
    </div>
  )
}

export default AllJobsPage