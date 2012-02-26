describe 'namespace', ->
  describe 'module(name)', ->
    it 'should return the same module for each unique name', ->
      namespace.module("example").should.equal namespace.module("example")