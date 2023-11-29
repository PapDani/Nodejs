var expect = require('chai').expect;
var getCreatorByIdMW = require('../../../../middleware/creator/getCreatorByIdMW');

describe('getCreatorByIdMW middleware', function() {
    it('should return one creator by id', function(done){
        const mw = getCreatorByIdMW({
            CreatorModel:{
                findOne: (param1, callback) => {
                    callback(null, 'mockCreator');
                }
            }
        });

        mw({
            params:{
                creatorid: '10'
            }
        },{
            locals:{
                
            }
        },() => {

        });
    });
});

//https://youtu.be/YNV3z5PqcEo?si=eCtoUa2Ja4LU5HST&t=560