const initState = {
    projects: [
        {id:'1', title:'Learing Spring Boot', content:'Learnign from Various Tutorials'},
        {id:'2', title:'Learing Spring', content:'Learnign from Various Tutorials'},
        {id:'3', title:'Learing JavScript', content:'Learnign from Various Tutorials'}
    ]
}

const projectReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project',action.project);
    }
     
    return state;

}

export default projectReducer;