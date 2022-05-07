function extractPriorities(feedbackList) {
    const priorities = feedbackList.filter(feedback => feedback.isPriority === true);
    
    const prioritiesList = [];

    priorities.forEach(priority => {
        prioritiesList.push(priority.text)
    })

    return prioritiesList;
}

export default extractPriorities;