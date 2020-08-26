class Skill < ApplicationRecord
  NAMES = ["Entraîneur", "Préparateur mental", "Préparateur physique" ]

  belongs_to :user
  has_many :experiences, dependent: :destroy
  has_many :bookings, dependent: :destroy

  validates :name, presence: true, inclusion: {in: Skill::NAMES}
  validates :location, presence: true
  validates :description, presence: true

end
