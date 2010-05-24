$:.unshift(File.dirname(__FILE__) + '/../../lib')
require 'cucumber/rake/task'
# wouldn't this be cool
# require 'cucumber/js/commonjs/require'

Cucumber::Rake::Task.new


task :default => :cucumber

# need a callback to V8 context that cucumber is using
# then define require
