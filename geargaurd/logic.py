import datetime
from datetime import timedelta

# Stages of a maintenance request
STAGES = ["New", "In Progress", "Repaired", "Scrap"]


# Equipment details
class Equipment:
    def __init__(self, name, maintenance_team):
        self.name = name
        self.maintenance_team = maintenance_team
        self.is_scrapped = False

    # Mark equipment as scrap
    def mark_as_scrap(self):
        self.is_scrapped = True
        print(f"'{self.name}' is now SCRAPPED")

    # Check if equipment can be used
    def is_usable(self):
        return not self.is_scrapped


# Team member details
class TeamMember:
    def __init__(self, name, team):
        self.name = name
        self.team = team

    def __repr__(self):
        return f"{self.name} ({self.team})"


# Maintenance request logic
class MaintenanceRequest:
    def __init__(self, subject, request_type="Corrective"):
        self.subject = subject
        self.request_type = request_type
        self.stage = "New"
        self.equipment = None
        self.team = None
        self.scheduled_date = None

    # Select equipment and auto-assign team
    def select_equipment(self, equipment):
        if not equipment.is_usable():
            print(f"Cannot create request for '{equipment.name}' because it is scrapped")
            return

        self.equipment = equipment
        self.team = equipment.maintenance_team
        print(f"Team '{self.team}' assigned for '{equipment.name}'")

    # Set date for preventive maintenance
    def set_schedule(self, scheduled_date):
        if self.request_type == "Preventive" and not scheduled_date:
            raise ValueError("Preventive maintenance needs a scheduled date")

        self.scheduled_date = scheduled_date
        print(f"Scheduled on {scheduled_date}")

    # Move request to next stage
    def move_stage(self, next_stage):
        current_index = STAGES.index(self.stage)
        allowed_next = STAGES[current_index + 1] if current_index + 1 < len(STAGES) else None

        # Scrap can be done directly if equipment is beyond repair
        can_scrap_directly = next_stage == "Scrap" and self.stage in ["New", "In Progress"]

        if next_stage != allowed_next and not can_scrap_directly:
            print(f"Cannot move from '{self.stage}' to '{next_stage}'")
            return

        self.stage = next_stage
        print(f"Stage changed to '{self.stage}'")

        if self.stage == "Scrap":
            self.scrap_equipment()

    # Check if the request is overdue
    def is_overdue(self):
        if not self.scheduled_date:
            return False

        today = datetime.date.today()
        return today > self.scheduled_date and self.stage not in ["Repaired", "Scrap"]

    # Scrap the equipment linked to this request
    def scrap_equipment(self):
        if self.equipment:
            self.equipment.mark_as_scrap()


# ---------------- DEMO ----------------
if __name__ == "__main__":

    IT_TEAM = "IT Support"
    MECH_TEAM = "Mechanical"

    printer = Equipment("Printer 01", IT_TEAM)
    cnc_machine = Equipment("CNC Machine", MECH_TEAM)

    # Corrective maintenance flow
    print("\nCorrective Maintenance")
    req1 = MaintenanceRequest("Printer paper jam")
    req1.select_equipment(printer)
    req1.move_stage("In Progress")
    req1.move_stage("Repaired")

    # Preventive maintenance flow
    print("\nPreventive Maintenance")
    req2 = MaintenanceRequest("Monthly CNC check", request_type="Preventive")
    req2.select_equipment(cnc_machine)

    past_date = datetime.date.today() - timedelta(days=5)
    req2.set_schedule(past_date)

    if req2.is_overdue():
        print("This task is overdue")

    req2.move_stage("In Progress")
    req2.move_stage("Scrap")

    # Try using scrapped equipment again
    print("\nTrying to use scrapped equipment")
    req3 = MaintenanceRequest("Another CNC request")
    req3.select_equipment(cnc_machine)