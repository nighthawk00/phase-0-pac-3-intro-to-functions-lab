function shout(string) {
 return string.toUpperCase();
}
function whisper(string) {
 return string.toLowerCase();
}
function logShout(string) {
 console.log('HELLO');
}
function logWhisper(string) {
 console.log('hello');
}
describe('sayHiToHeadphonedRoommate(string)', function() {
    it('returns "I can\'t hear you!" if `string` is lowercase', function() {
      expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
    })
  
    it('returns "YES INDEED!" if `string` is uppercase', function() {
      expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
    })
  
    it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
      expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
        "I would love to!"
      );
    });
  })
  