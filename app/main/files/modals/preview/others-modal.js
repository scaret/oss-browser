angular.module('web')
  .controller('othersModalCtrl', ['$scope','$uibModalInstance','bucketInfo','objectInfo','fileType','showFn','ossSvs',
    function ($scope, $modalInstance, bucketInfo, objectInfo, fileType, showFn, ossSvs) {

      angular.extend($scope, {
        bucketInfo: bucketInfo,
        objectInfo: objectInfo,
        fileType: fileType,

        showFn: showFn,

        cancel: cancel,
        showAs: showAs,
        //showDownload: showDownload,

        showAsCodeBtn: shouldShowAsCodeBtn()
      });

      function shouldShowAsCodeBtn(){
        var name = objectInfo.name;

        if(endswith(name, '.tar.gz') || endswith(name, '.tar') || endswith(name, '.zip') || endswith(name, '.bz') || endswith(name, '.xz')
         || endswith(name, '.dmg') || endswith(name, '.pkg') || endswith(name, '.apk')
         || endswith(name, '.exe') || endswith(name, '.msi') || endswith(name, '.dll')|| endswith(name, '.chm')
         || endswith(name, '.iso') || endswith(name, '.img') || endswith(name, '.img')
         || endswith(name, '.pdf') || endswith(name, '.doc') || endswith(name, '.docx')
       ){
          return false;
        }
        return true;
      }

      function cancel() {
        $modalInstance.dismiss('close');
      }

      function showAs(type){
        showFn.preview(objectInfo, type);
        cancel();
      }

      // function showDownload(){
      //   showFn.download(bucketInfo, objectInfo);
      //   cancel();
      // }


        function endswith(s, ext){
          return s.lastIndexOf(ext)== s.length-ext.length;
        }
    }])
;
