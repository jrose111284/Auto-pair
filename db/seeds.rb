# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  tests = Test.create([{ description: "Test 1", pass_score: 4 }, { description: "Test 2", pass_score: 2 }, { description: "Test 3", pass_score: 5 }])
