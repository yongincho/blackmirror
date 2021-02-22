function create_table() {
    chrome.tabs.create({url: chrome.extension.getURL('documentation/documentation.html')});
}

function test() {
    chrome.windows.getAll({populate:true},function(windows){
        windows.forEach(function(window){
          window.tabs.forEach(function(tab){
            //collect all of the urls here, I will just log them instead
            console.log(tab.url);
            newRow="<td>"+tab.url+"</td><td>blank</td>";
            document.getElementById('url-table').innerHTML += newRow;
          });
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('btn_launch');
    // onClick's logic below:
    link.addEventListener('click', function() {
        create_table();
    });
});

