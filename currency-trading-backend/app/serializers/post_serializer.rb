class PostSerializer < ActiveModel::Serializer
  has_many :comments
  attributes :title, :comments
end