import Card from "../../../Card/Card";

function ManageQuizzes(props) {
    return (
        <>
            <header>
                <h1>quizzes</h1>
                <p className='subtitle'>manage</p>
            </header>
            <section>
                <p>Select a course to see quizzes for that course.</p> {/* rar setning? */}
                
                <h2>Spring 2022</h2>
                <ul className='cards-grid-container'>
                    <Card link='/manage/courses/idg2100' type='course' courseCode={'idg2100'} fullCourseName={'Et navn på et emne'} />
                    <Card link='#' type='course' courseCode={'IDG1234'} fullCourseName={'Et navn på et emne'} />
                    <Card link='#' type='course' courseCode={'IDG1234'} fullCourseName={'Et navn på et emne'} />
                    <Card link='#' type='course' courseCode={'IDG1234'} fullCourseName={'Et navn på et emne'} />
                </ul>

                <h2>Fall 2021</h2>
                <ul className='cards-grid-container'>
                    <Card link='#' type='course' courseCode={'IDG1234'} fullCourseName={'Et navn på et emne'} />
                    <Card link='#' type='course' courseCode={'IDG1234'} fullCourseName={'Et navn på et emne'} />
                    <Card link='#' type='course' courseCode={'IDG1234'} fullCourseName={'Et navn på et emne'} />
                    
                </ul>

            </section>
        </>
    );
}

export default ManageQuizzes;