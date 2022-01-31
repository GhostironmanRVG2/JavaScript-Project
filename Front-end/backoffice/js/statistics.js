      //Number of daily occurrences
                  fetch('https://54d82a4bef854785886ab91f701b592a.vfs.cloud9.us-east-1.amazonaws.com/OccurrencesDaily/')
            .then(res => res.json())
            .then((out) => {
                $.each(out, function(index, value) {
                    nrOccurrencesDaily.innerText = value.rows ;
    
 });
            }).catch(err => console.error(err));
            
            //Number of active occurrences
                  fetch('https://54d82a4bef854785886ab91f701b592a.vfs.cloud9.us-east-1.amazonaws.com/OccurrencesCountActive/')
            .then(res => res.json())
            .then((out) => {
                $.each(out, function(index, value) {
                    nrActiveOccurrences.innerText = value.rows ;
    
 });
            }).catch(err => console.error(err));
            
//Perc of solved occurrences
                  fetch('https://54d82a4bef854785886ab91f701b592a.vfs.cloud9.us-east-1.amazonaws.com/OccurrencesPercCompleted')
            .then(res => res.json())
            .then((out) => {
                $.each(out, function(index, value) {
                    occurrencessolved.style.width =  value.perc+"%" ;
                    nrsolvedoccurrences.innerHTML = value.perc.toFixed(0)+"%";
    
 });
            }).catch(err => console.error(err));           
            
            
//Percentage of fake requests
                  fetch('https://54d82a4bef854785886ab91f701b592a.vfs.cloud9.us-east-1.amazonaws.com/OccurrencesFakes/')
            .then(res => res.json())
            .then((out) => {
                $.each(out, function(index, value) {
                    if (value.Perc != null){
                    fakeRequestsTxt.innerHTML = value.Perc.toFixed(0)+"%" ;
                    fakeRequests.style.width =  value.Perc+"%" ;}
                    else { 
                    fakeRequestsTxt.innerHTML = "0%" ;
                    fakeRequests.style.width =  "0%" ;
                    }
    
 });
            }).catch(err => console.error(err));
            
//Percentage of serious occurrences
                  fetch('https://54d82a4bef854785886ab91f701b592a.vfs.cloud9.us-east-1.amazonaws.com/OccurrencesPercActiveHuge/')
            .then(res => res.json())
            .then((out) => {
                $.each(out, function(index, value) {
                activeS.style.width =  value.perc+"%" ;
                activeStxt.innerHTML = value.perc.toFixed(0)+"%";
    
 });
            }).catch(err => console.error(err));
            
//Percentage of very serious occurrences
                  fetch('https://54d82a4bef854785886ab91f701b592a.vfs.cloud9.us-east-1.amazonaws.com/OccurrencesPercActiveHugePlus/')
            .then(res => res.json())
            .then((out) => {
                $.each(out, function(index, value) {
                activeVS.style.width =  value.perc+"%" ;
                activeVStxt.innerHTML = value.perc.toFixed(0)+"%";
    
 });
            }).catch(err => console.error(err));
            
            
//Percentage of pending request
                  fetch('https://54d82a4bef854785886ab91f701b592a.vfs.cloud9.us-east-1.amazonaws.com/RequestsNonOccurrencesCount/')
            .then(res => res.json())
            .then((out) => {
                $.each(out, function(index, value) {
                nrpendingrequests.innerHTML =  value.rows;
            
    
 });
            }).catch(err => console.error(err));