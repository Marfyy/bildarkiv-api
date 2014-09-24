var gith = require('gith').create(3590);
var exec = require('child_process').exec; 

gith({
  repo: 'marfyy/bildarkiv-api'  // the github-user/repo-name
}).on('all', function(payload){

    console.log("push received");
    exec(__dirname + '/hook/hook.sh ' + payload.branch, function(err, stdout, stderr){
      if (err) return err;
      console.log(stdout);
      console.log("git deployed to branch " + payload.branch);
    });
});