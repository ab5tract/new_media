#!/usr/bin/ruby
##################
# tex.rb
# -- TeX related commands
##################

module Tex

	# delete those pesky temporary files
	def clean
    count = { tuc: [], log: [] }
		#count = {}
		dirty = { tuc: '*.tuc', log: '*.log' }
		#count = dirty.keys.each {|k| count[k] = [] }
		files = dirty.keys.each do |d| 
		  Dir.glob(dirty[d]) do |x| 
				count[d] << x
				File.delete(x) or raise "Could not delete file '#{x}'"
			end
		end
		render count
	end

	# even better, let's delete them and separate our outputs from the sources
	def sweep
		clean
		report = []
		['pdf', 'tex', 'html', 'odt'].each do |s|
    	unless File.directory?("./#{s}") then Dir.mkdir("./#{s}") end
			Dir.glob("*.#{s}") do |p|
				%x[mv #{p} ./#{s}] or raise "Could not move file '#{x}'"
				report << p
			end
			render report
		end
	end

	# a whole other style of sorting (all project files will be moved into their own subdirectory)
	def scrub
		clean
		basenames = []
    Dir.glob('*.tex') {|t| basenames << File.basename(t, '.tex') }
		basenames.each do |b| 
			unless File.directory?(b) then Dir.mkdir(b) end
			Dir.glob("#{b}.*") {|p| %x[mv #{p} ./#{b}] } 
		end
    render basenames    
	end

	def transductl
		files = []
		files = Dir.glob('*.md') 
		files.each do |f|
			%x[pandoc -o #{File.basename(f, '.md')}.tex -t context -s #{f}]
			%x[pandoc -o #{File.basename(f, '.md')}.html -S -s #{f}]
			%x[pandoc -o #{File.basename(f, '.md')}.odt #{f}]
			%x[context #{File.basename(f, '.md')}.tex]
		end
		sweep
	end


end

