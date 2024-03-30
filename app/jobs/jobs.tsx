'use client'
import { useEffect, useState } from "react";
export const Job=()=>{
  const [jobs,setJob]=useState([])
  const [open,setopen]=useState(false)
   const [openid,setopenid]=useState('')
   console.log(openid)
  
    useEffect(()=>{
    const getJobs=()=>{
         fetch('https://ca-central-1.cdn.hygraph.com/content/cloa97imdf5d301uh6jzu3kyp/master'
          ,{
              method: 'POST',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify({
              query: `
                query Services {
                    jobs {
                      id
                      title
                    description
                  }
                }
              `
             })
          })
          .then((res) => res.json())
            .then((data) => {
              setJob(data.data.jobs);   
        })
        };  
        getJobs();  
   },[])
    return(
      <>
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
             <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
                <div>
                  <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Domains and Departments</h2>
                </div>
                <div className="lg:col-span-2">
                  {jobs.map((jobs:any) => (
                  <button 
                    type="button" value={openid}
                    className="group block w-full py-4 text-left transition focus-visible:outline-none"
                    onClick={()=> {
                      setopen(!(open))
                      setopenid(jobs.id)
                    }}>
                    <div className={`group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-700 flex items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 px-6 ${(open)&&(jobs.id===openid)?'bg-slate-200':''}  ${(open)&&(jobs.id===openid)?'p-4':''}`}>
                    <div className="grid grid-col gap-6">
                       <span className="font-medium" > {jobs.title}</span>
                          
                        {
                           (open)&&(jobs.id===openid)?<span key={jobs.id}  onChange={(e:any)=>setopenid(e.target.value)}>{jobs.description } </span>:null   
                        }
                    </div>
                    <span className="ml-6 flex h-7 items-center ">
                      {
                        (open)&&(jobs.id===openid)?
                        <svg
                          className="text-primary-600 dark:text-primary-400 h-6 w-6 rotate-0 transform transition duration-200 ease-in-out"
                        
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M112 328l144-144 144 144" />
                        </svg>
                        :
                        <svg
                          className="text-primary-600 dark:text-primary-400 h-6 w-6 rotate-0 transform transition duration-200 ease-in-out"
                        
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" />
                        </svg>
                      }
                    </span>
                   </div>
                     <hr />
                  </button>
                  ))}
              </div>
            </div>
          </div>
        </section>

      </>
    )
    }
