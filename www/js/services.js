angular.module('starter.services', [])

    .factory('UserFactory', function ($localForage) {

        var usersTable = $localForage.createInstance({
            name: 'users'
        });
        var tableUsers = [];
        tableUsers.push({'username':'test@mail.com','name':'segundo'});
        return {
            createUser:function (username, name) {
              usersTable.setItem(username,name);
              tableUsers.push({'username':username,'name':name});
            },
            listUsers: function () {
              return tableUsers;
              //return usersTable;
            }
        }
    });
