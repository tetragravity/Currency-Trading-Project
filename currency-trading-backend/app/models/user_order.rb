class UserOrder < ApplicationRecord
    belongs_to :user, required: false
    belongs_to :orderBook, required: false
end
