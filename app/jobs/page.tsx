import {Job} from '../jobs/jobs'
const main=()=>{
  return(
    <>
   <section className="py-16 sm:py-20 ">
  <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div className="flex flex-col gap-4 sm:gap-6">
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl ">Jobs</h1>
      <p className="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-xl text-lg sm:text-xl">
      Choose the skills that you own.
      </p>
    </div>
  </div>
</section>
<Job />
    </>
  )
}
export default main