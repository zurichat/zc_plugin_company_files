import React, { useState, useEffect } from 'react'
import axios from 'axios'
import userImage from './Images/Rectangle 8.png'
import classes from './Activities.module.css'

function Activities() {
   const [activities, setActivities] = useState([])
   const [display, setDisplay] = useState(false)

   useEffect(() => {
      axios.get('https://companyfiles.zuri.chat/api/v1/activities')
      .then(res => {
         console.log('res', res)
         console.log('resdata', res.data)
         console.log('resdatadata', res.data.data)
         setActivities(res.data.data.reverse())
      })
      .catch(err => {
         console.log(err)
      })
   }, [])
   
   const goBack = () => {
      const currentState = history.state;
      history.pushState(currentState, '', '/companyfiles');
   }

   const convertMS = (milliseconds) => {
      let month, day, hour, minute;
      const time = Date.now()
      minute = Math.floor( ((time - milliseconds) / 60000));
      hour = Math.floor(minute / 60)
      day = Math.floor(hour / 24);
      month = Math.floor(day / 30);

      if (minute < 60) {
         if (minute === 1) {
            return minute + ' minute ago'
         } else {
            return minute + ' minutes ago'
         }
      }

      if (hour < 24) {
         if (hour === 1) {
            return hour + ' hour ago'
         } else {
            return hour + ' hours ago'
         }
      }

      if (hour >= 24) {
         if (day === 1) {
            return day + ' day ago'
         } else {
            return day + ' days ago'
         }
      }

      if (day > 30) {
         if (month === 1) {
            return month + ' month ago'
         } else {
            return month + ' months ago'
         }
      }
   }
   
   const backBtn = (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M20.6238 12.4863H4.12451" stroke="#333333" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M10.3117 18.4863L4.12451 12.4863L10.3117 6.48633" stroke="#333333" stroke-width="1.22693" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
   )

   const pushPin = (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0)">
         <path d="M9.89933 14.2667L9.89913 14.2669C9.79794 14.365 9.6258 14.365 9.52461 14.2669L3.867 8.78044C3.77683 8.69296 3.77697 8.56 3.8669 8.47278L3.86711 8.47259C3.91319 8.42786 3.98021 8.39909 4.05445 8.39909H6.9973H7.26071L7.44981 8.21571L12.8789 2.95084L13.3313 2.51217L16.017 5.11665L15.5934 5.5275L10.1642 10.7924L9.96673 10.9839V11.259V14.1128C9.96673 14.1669 9.94476 14.2227 9.89933 14.2667Z" stroke="#606060" stroke-width="1.3"/>
         <path d="M6.69569 12.4292L2.14577 16.8415C1.57037 17.3994 0.849454 17.7952 0.0600586 17.9866C0.257407 17.2211 0.665507 16.522 1.24091 15.964L5.79083 11.5518L6.69569 12.4292Z" fill="#606060"/>
         </g>
         <defs>
         <clipPath id="clip0">
         <rect width="17.5304" height="17" fill="white" transform="translate(0.0600586 0.986328)"/>
         </clipPath>
         </defs>
      </svg>
   )

   const trash = (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M2.375 5.23633H3.83587H15.5228" stroke="#606060" stroke-width="2.23" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M14.8115 5.23619C14.8115 4.82198 14.4758 4.48619 14.0615 4.48619C13.6473 4.48619 13.3115 4.82198 13.3115 5.23619H14.8115ZM4.58545 5.23619C4.58545 4.82198 4.24966 4.48619 3.83545 4.48619C3.42124 4.48619 3.08545 4.82198 3.08545 5.23619H4.58545ZM5.27685 5.23616C5.27685 5.65038 5.61264 5.98616 6.02685 5.98616C6.44106 5.98616 6.77685 5.65038 6.77685 5.23616H5.27685ZM11.1203 5.23616C11.1203 5.65038 11.4561 5.98616 11.8703 5.98616C12.2845 5.98616 12.6203 5.65038 12.6203 5.23616H11.1203ZM13.3115 5.23619V15.1529H14.8115V5.23619H13.3115ZM13.3115 15.1529C13.3115 15.4995 13.0152 15.8195 12.6007 15.8195V17.3195C13.7998 17.3195 14.8115 16.371 14.8115 15.1529H13.3115ZM12.6007 15.8195H5.29632V17.3195H12.6007V15.8195ZM5.29632 15.8195C4.88183 15.8195 4.58545 15.4995 4.58545 15.1529H3.08545C3.08545 16.371 4.09718 17.3195 5.29632 17.3195V15.8195ZM4.58545 15.1529V5.23619H3.08545V15.1529H4.58545ZM6.77685 5.23616V3.8195H5.27685V5.23616H6.77685ZM6.77685 3.8195C6.77685 3.47286 7.07323 3.15283 7.48772 3.15283V1.65283C6.28858 1.65283 5.27685 2.60133 5.27685 3.8195H6.77685ZM7.48772 3.15283H10.4095V1.65283H7.48772V3.15283ZM10.4095 3.15283C10.824 3.15283 11.1203 3.47286 11.1203 3.8195H12.6203C12.6203 2.60133 11.6086 1.65283 10.4095 1.65283V3.15283ZM11.1203 3.8195V5.23616H12.6203V3.8195H11.1203Z" fill="#606060"/>
         <path d="M7.48779 8.77783V13.0278" stroke="#606060" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M10.4097 8.77783V13.0278" stroke="#606060" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
   )

   const optionsIcon = (
      <svg width="3" height="9" viewBox="0 0 3 9" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0.414551 7.87646V7.64651C0.414551 7.64083 0.417384 7.63515 0.423051 7.62948L0.431552 7.59541C0.465555 7.35126 0.573231 7.14261 0.754579 6.96943C0.935927 6.79626 1.14561 6.704 1.38363 6.69264C1.64999 6.66993 1.88517 6.72813 2.08919 6.86723C2.29321 7.00634 2.43205 7.2008 2.50572 7.45063C2.51139 7.4563 2.51564 7.46482 2.51847 7.47618C2.52131 7.48753 2.52414 7.49747 2.52698 7.50598C2.52981 7.5145 2.53123 7.52302 2.53123 7.53153C2.53123 7.54005 2.53264 7.54999 2.53548 7.56134C2.53831 7.5727 2.54114 7.58263 2.54398 7.59115C2.54681 7.59967 2.54964 7.6096 2.55248 7.62096C2.55531 7.63231 2.55673 7.64083 2.55673 7.64651V7.87646L2.55248 7.89775L2.53973 7.92756C2.50572 8.14899 2.41363 8.34061 2.26345 8.50243C2.11327 8.66425 1.92768 8.76787 1.70666 8.81329C1.68966 8.81897 1.66699 8.82464 1.63865 8.83032C1.62165 8.836 1.61032 8.83884 1.60465 8.83884H1.35813C1.34113 8.83316 1.32979 8.82748 1.32413 8.82181C1.10311 8.78774 0.914675 8.69689 0.758829 8.54927C0.602983 8.40165 0.499558 8.21996 0.448554 8.00421C0.442886 7.98717 0.435803 7.96446 0.427302 7.93607C0.418801 7.90769 0.414551 7.88781 0.414551 7.87646ZM2.55673 1.33567V1.56562L2.55248 1.58691L2.53973 1.61672C2.50572 1.86087 2.39663 2.06952 2.21245 2.2427C2.02827 2.41587 1.81717 2.50813 1.57915 2.51949C1.40347 2.53084 1.23912 2.50671 1.08611 2.44709C0.933094 2.38748 0.80275 2.29805 0.695074 2.17882C0.587398 2.05959 0.508059 1.91764 0.457054 1.75299C0.457054 1.73595 0.442886 1.6735 0.414551 1.56562V1.33567C0.414551 1.32999 0.417384 1.32148 0.423051 1.31012L0.431552 1.28457C0.510892 0.847384 0.765913 0.557818 1.19662 0.415874C1.21928 0.410196 1.25187 0.40168 1.29437 0.390324C1.33688 0.378969 1.36096 0.373291 1.36663 0.373291H1.60465L1.61315 0.381808C1.63015 0.387485 1.64149 0.390324 1.64715 0.390324C1.86817 0.424391 2.05802 0.515235 2.2167 0.662857C2.37538 0.810479 2.48022 0.995006 2.53123 1.21644C2.53689 1.23915 2.54539 1.27606 2.55673 1.32716V1.33567ZM2.55673 4.48683V4.7253L2.54823 4.74659L2.53973 4.7764C2.50006 5.02054 2.38813 5.2292 2.20395 5.40237C2.01977 5.57554 1.80867 5.66781 1.57065 5.67916C1.29862 5.69052 1.05919 5.62239 0.852337 5.47476C0.645487 5.32714 0.510892 5.12842 0.448554 4.8786C0.442886 4.84453 0.431552 4.79343 0.414551 4.7253V4.48683L0.423051 4.46554L0.431552 4.43573C0.465555 4.19159 0.576064 3.98293 0.76308 3.80976C0.950095 3.63659 1.16261 3.54432 1.40063 3.53297C1.67265 3.52161 1.91209 3.58975 2.11894 3.73737C2.32579 3.88499 2.46039 4.08371 2.52273 4.33353C2.52839 4.3676 2.53973 4.4187 2.55673 4.48683Z" fill="#B4B4B4"/>
      </svg>
   )

   const markAsRead = (
      <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
         <line x1="0.242188" y1="1.14746" x2="13.5106" y2="1.14746" stroke="#606060" stroke-width="1.25"/>
         <line x1="0.242188" y1="4.21826" x2="13.5106" y2="4.21826" stroke="#606060" stroke-width="1.25"/>
         <line x1="0.242188" y1="7.28955" x2="13.5106" y2="7.28955" stroke="#606060" stroke-width="1.25"/>
         <line x1="0.242188" y1="10.3604" x2="5.75414" y2="10.3604" stroke="#606060" stroke-width="1.25"/>
         <path d="M16.2056 11.1938L10.6579 16.5737L8.13623 14.1283" stroke="#606060" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
   )
   console.log('activities', activities)

   return (
      <div className={classes.activities}>
         <div className={classes.header}>
            <div className={classes.backBtn} onClick={goBack}>
               {backBtn}
            </div>
            <div className={classes.allActivities}>
               All Activities
            </div>
            <div className={classes.pushPin}>
               {pushPin}
            </div>
            <div className={classes.trash}>
               {trash}
            </div>
         </div>
         <div className={classes.activities__left}>
               
               {
                  activities.map((activity, idx) => (
                     <div className={classes.activitiesDescription}>
                  <div className={classes.container}>
                     <div className={classes.img}>
                           <img src={activity.userObj.img_url} alt="user picture" />
                     </div>
                     <div className={classes.text}>
                           {activity.userObj.user_name} {activity.operation} 
                           <span> {activity.filename} </span>
                           from
                           <span> Company files</span>
                     </div>
                     <div className={classes.time}>
                           {/* {Math.floor((activity.time) / 3600000)} hours ago */}
                           {convertMS(activity.time)}
                     </div>
                     <div className={classes.options} onClick={() => setDisplay(!display)}>
                           {optionsIcon}
                     </div>
                  </div>
                  {
                     display ? (
                           <>
                           <div className={classes.overlay} onClick={() => setDisplay(!display)}></div>
                           <div className={classes.dropdown}>
                              <div className={classes.pin}>
                                 {pushPin}
                                 Pin
                              </div>
                              <div className={classes.markAsRead}>
                                 {markAsRead}
                                 Mark as read
                              </div>
                              <div className={classes.delete}>
                                 {trash}
                                 Delete
                              </div>
                           </div>
                           </>
                     ) : null
                  }
               </div>
                  ))
               }
         </div>
         {/* <div className={classes.activities__right}>
               <div className={classes.top}>
                  <div className={classes.chart}>

                  </div>
               </div>
               <div className={classes.bottom}>
                  <div className={classes.collaborators}>
                     <div className={classes.header}>
                           <span>Collaborators</span>
                           <span>5</span>
                     </div>
                  </div>
               </div>
         </div> */}
      </div>
   )
}

export default Activities