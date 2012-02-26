(function() {

  describe('namespace', function() {
    return describe('module(name)', function() {
      return it('should return the same module for each unique name', function() {
        return namespace.module("example").should.equal(namespace.module("example"));
      });
    });
  });

}).call(this);
