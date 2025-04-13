# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "instructional-blog"
  spec.version       = "0.1.3"
  spec.authors       = ["scshafe"]
  spec.email         = ["scshafe@umich.edu"]

  spec.summary       = "Write a short summary, because Rubygems requires one."
  spec.homepage      = "https://github.com/scshafe/instructional-blog"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
